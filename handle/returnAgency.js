const db = require('./index')

exports.checkProduct = (user, data) => {
    const query = `select * 
    from bh_kho join san_pham on bh_kho.id_sp=san_pham.id_sp 
    where san_pham.id_tt=5 and bh_kho.id_bh=(SELECT bao_hanh.id_bh from bao_hanh where bao_hanh.user='${user}') and bh_kho.id_sp='${data.id}'`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}

exports.returnAgency = (data) => {
    const query = `insert into bh_ve_dl(bh_ve_dl.id_sp,bh_ve_dl.lan_bh,bh_ve_dl.id_dl,ngay_bh_tra_dl,bh_ve_dl.id_bh)
    SELECT dl_gui_bh.id_sp,san_pham.da_bh,dl_gui_bh.id_dl,'${data.date}',dl_gui_bh.id_bh
    from dl_gui_bh join san_pham on san_pham.id_sp=dl_gui_bh.id_sp && dl_gui_bh.lan_bh=san_pham.da_bh
    where san_pham.id_sp='${data.id}';
    
    INSERT into dl_kho(dl_kho.id_dl,dl_kho.id_sp)
    select dl_gui_bh.id_dl,dl_gui_bh.id_sp
    from dl_gui_bh join san_pham on san_pham.id_sp=dl_gui_bh.id_sp && dl_gui_bh.lan_bh=san_pham.da_bh
    WHERE san_pham.id_sp='${data.id}';
    DELETE from bh_kho
    where id_sp='${data.id}';
    
    update san_pham
    set id_tt=6,loai_vitri=2,id_vitri=(select dl_gui_bh.id_dl
    from dl_gui_bh join san_pham on san_pham.id_sp=dl_gui_bh.id_sp && dl_gui_bh.lan_bh=san_pham.da_bh
    WHERE san_pham.id_sp='${data.id}')
    WHERE id_sp='${data.id}';`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}