const db = require('./index')

exports.getFactoriesList = () => {
    const query = 'SELECT * from noi_san_xuat';

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    })
}