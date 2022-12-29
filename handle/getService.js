const db = require('./index');

exports.checkProduct = (id) => {
    const query = `select * from san_pham where id_sp='${id}' and id_tt=3`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}

exports.getService = (user, data) => {
    const query = `insert into baohanh_dl_nhan(baohanh_dl_nhan.id_sp,lan_bh,baohanh_dl_nhan.id_dl,ngay_dl_nhan_bh,mo_ta)
    SELECT ban_hang.id_sp,san_pham.da_bh+1,(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}'),'${data.date}','${data.problem}'
    from ban_hang join san_pham on san_pham.id_sp=ban_hang.id_sp
    where san_pham.id_sp='${data.id}';
    INSERT into dl_kho(id_dl,id_sp) VALUES((SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}'),'${data.id}');
    
    update san_pham
    set id_tt=4,loai_vitri=2,id_vitri=(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}'),san_pham.da_bh=san_pham.da_bh+1
    WHERE id_sp='${data.id}';`

    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}