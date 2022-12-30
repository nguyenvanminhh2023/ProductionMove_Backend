const db = require('./index')

exports.checkProduct = (user, data) => {
    const query = `SELECT * 
    from dl_kho join san_pham on dl_kho.id_sp=san_pham.id_sp
    where dl_kho.id_sp='${data.id}' and san_pham.id_tt=6 and dl_kho.id_dl=(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}')`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}

exports.returnClient = (data) => {
    const query = `insert into baohanh_dl_tra_kh(baohanh_dl_tra_kh.id_sp,baohanh_dl_tra_kh.lan_bh,baohanh_dl_tra_kh.id_dl,ngay_tra_sp)
                SELECT bh_ve_dl.id_sp,san_pham.da_bh,bh_ve_dl.id_dl,'${data.date}'
                from bh_ve_dl join san_pham on san_pham.id_sp=bh_ve_dl.id_sp && bh_ve_dl.lan_bh=san_pham.da_bh
                where san_pham.id_sp='${data.id}';
                
                DELETE from dl_kho
                where id_sp='${data.id}';
                
                update san_pham
                set id_tt=7
                WHERE id_sp='${data.id}';`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}