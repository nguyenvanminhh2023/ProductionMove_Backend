const db = require('./index')

exports.getLinesList = () => {
    const query = 'SELECT * from dong_san_pham';

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