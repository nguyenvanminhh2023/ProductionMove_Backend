const db = require('./index');

exports.checkProduct = (id, user) => {
    const query = `select * from dl_kho join san_pham on dl_kho.id_sp=san_pham.id_sp
                where dl_kho.id_sp='${id}' and san_pham.id_tt=2 and id_dl=(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}');`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

exports.sellProduct = (data) => {
    const query = `INSERT INTO ban_hang(id_dl,id_sp,ten_khach,dia_chi_khach,dien_thoai,ngay_ban)
                    SELECT dl_kho.id_dl,dl_kho.id_sp,'${data.name}','${data.address}','${data.phone}','${data.date}'
                    from dl_kho
                    WHERE id_sp='${data.id}';
                    DELETE from dl_kho
                    where id_sp='${data.id}';
                    update san_pham
                    set id_tt=3
                    WHERE id_sp='${data.id}';`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}