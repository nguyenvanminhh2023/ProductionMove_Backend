const db = require('./index')

exports.thongkesx_nam = () => {
    const query = 'SELECT * FROM thongkesx_nam'
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}

exports.thongkesx_nam_cssx = (user_) => {
    const query = `select year(san_pham.ngaysx) as nam,count(*) as so_san_pham
                    from san_pham
                    WHERE san_pham.id_sx=(SELECT noi_san_xuat.id_sx from noi_san_xuat where noi_san_xuat.user='${user_}')
                    group by nam`
    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}