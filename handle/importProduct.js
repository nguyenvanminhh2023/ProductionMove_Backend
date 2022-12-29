const db = require('./index');

exports.checkProduct = (id) => {
    const query = `select * from san_pham where id_sp='${id}' and id_tt=1`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

exports.importProduct = (user, id, date) => {
    const query = `insert into sxmoi_den_dl(sxmoi_den_dl.id_sp,id_sx,id_dl,ngay_nhan_sx_dl)
                    SELECT san_pham.id_sp,san_pham.id_sx,(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}'),'${date}'
                    from san_pham
                    where san_pham.id_sp='${id}';
                    INSERT into dl_kho(id_dl,id_sp)VALUES((SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}'), '${id}');
                    DELETE from sx_kho
                    where id_sp='${id}';
                    update san_pham
                    set id_tt=2,loai_vitri=2,id_vitri=(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}')
                    WHERE id_sp='${id}';`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}
