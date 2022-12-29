const db = require('./index')

exports.addNewProduct = (iddsp, usersx, ngaysx) => {
    const query = `INSERT INTO san_pham ( id_dsp, id_tt, id_sx, loai_vitri, id_vitri, ngaysx, ngay_het_bh) VALUES
                    ('${iddsp}', 1, (SELECT noi_san_xuat.id_sx from noi_san_xuat where noi_san_xuat.user='${usersx}'), 1, 1, '${ngaysx}', '${ngaysx}' + INTERVAL 15 Year);
                    insert into sx_kho(sx_kho.id_sx,sx_kho.id_sp)
                    SELECT 1, max(id_sp) from san_pham;`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    })
}