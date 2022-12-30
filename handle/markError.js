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

exports.markError = (data) => {
    const query = `update san_pham
                set id_tt=8
                WHERE san_pham.id_sp='${data.id}'`

    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}