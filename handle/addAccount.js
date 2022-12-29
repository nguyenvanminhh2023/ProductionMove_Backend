const db = require('./index');

exports.getUser = (user) => {
    const query = `SELECT * FROM user WHERE user = '${user}'`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

exports.addUser = (data) => {
    var query
    if (data.role == 'A1') {
        query = `INSERT INTO user(user, PASSWORD, role, name_unit, name_role) VALUES('${data.user}', '${data.password}', '${data.role}', '${data.name_unit}', '${data.name_role}');` +
        `INSERT INTO noi_san_xuat(ten_nsx, dia_chi_sx, user) VALUES('${data.user}', '${data.name_unit}', '${data.user}')`

    } else if (data.role == 'A2') {
        query = `INSERT INTO user(user, PASSWORD, role, name_unit, name_role) VALUES('${data.user}', '${data.password}', '${data.role}', '${data.name_unit}', '${data.name_role}');` +
        `INSERT INTO dai_ly(ten_dl, dia_chi_dl, user) VALUES('${data.user}', '${data.name_unit}', '${data.user}')`

    } else {
        query = `INSERT INTO user(user, PASSWORD, role, name_unit, name_role) VALUES('${data.user}', '${data.password}', '${data.role}', '${data.name_unit}', '${data.name_role}');` +
        `INSERT INTO bao_hanh(ten_bh, diachi_bh, user) VALUES('${data.user}', '${data.name_unit}', '${data.user}')`
        
    }
    //INSERT INTO noi_san_xuat(id_sx, ten_nsx, dia_chi_sx, user) VALUES((SELECT max(id_sx) + 1 FROM noi_san_xuat), '${data.user}', '${data.name_unit}', '${data.user}')
    //const query = `INSERT INTO user(user, PASSWORD, role, name_unit, name_role) VALUES('${data.user}', '${data.password}', '${data.role}', '${data.name_unit}', '${data.name_role}');`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    })
}