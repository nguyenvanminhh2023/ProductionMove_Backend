const db = require('./index')

exports.checkProduct = (user, data) => {
    const query = `SELECT * 
                from dl_kho join san_pham on dl_kho.id_sp='${data.idsp}'
                where dl_kho.id_sp='${data.idsp}' and san_pham.id_tt=4 and dl_kho.id_dl=(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}')`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}

exports.sendService = (user, data) => {
    const query = `insert into dl_gui_bh(dl_gui_bh.id_sp,dl_gui_bh.lan_bh,dl_gui_bh.id_dl,ngay_bh_nhan_bh,dl_gui_bh.id_bh)
                SELECT baohanh_dl_nhan.id_sp,san_pham.da_bh,baohanh_dl_nhan.id_dl,'${data.date}','${data.idbh}'
                from baohanh_dl_nhan join san_pham on san_pham.id_sp=baohanh_dl_nhan.id_sp && baohanh_dl_nhan.lan_bh=san_pham.da_bh
                where san_pham.id_sp='${data.idsp}';
                INSERT into bh_kho(bh_kho.id_bh,bh_kho.id_sp)VALUES
                ('${data.idbh}','${data.idsp}');
                DELETE from dl_kho
                where id_sp='${data.idsp}';
                
                update san_pham
                set id_tt=5,loai_vitri=3,id_vitri='${data.idbh}'
                WHERE id_sp='${data.idsp}';`

    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}