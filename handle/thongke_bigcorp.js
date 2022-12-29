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