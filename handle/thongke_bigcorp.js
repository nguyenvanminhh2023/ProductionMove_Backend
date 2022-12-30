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

exports.thongke_trangthai_bc = () => {
    const query = 'SELECT * FROM thongke_tt'
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

exports.thongketheo_cssx = () => {
    const query = 'SELECT * FROM thongke_nsx'
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

exports.thongke_trangthai_cssx = (user) => {
    //const query = 'select `productionmove2`.`trang_thai`.`id_tt` AS `id_tt`,`productionmove2`.`trang_thai`.`mota_tt` AS `mota_tt`,count(0) AS `so_san_pham` from (`productionmove2`.`trang_thai` join `productionmove2`.`san_pham` on(`productionmove2`.`san_pham`.`id_tt` = `productionmove2`.`trang_thai`.`id_tt`)) group by `productionmove2`.`trang_thai`.`mota_tt`'
    const query = `select trang_thai.id_tt AS id_tt,trang_thai.mota_tt AS mota_tt,count(0) AS so_san_pham from (trang_thai join san_pham on(san_pham.id_tt = trang_thai.id_tt)) where san_pham.id_sx = (SELECT noi_san_xuat.id_sx from noi_san_xuat where noi_san_xuat.user='${user}') group by trang_thai.mota_tt`
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

exports.thongke_nam_daily = (user) => {
    const query = `select year(ngay_ban) as nam,count(*) as so_luong from ban_hang 
                where id_dl =(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}')
                group by nam;`
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