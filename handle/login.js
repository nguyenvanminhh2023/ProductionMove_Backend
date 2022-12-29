const db = require('./index')

exports.checkLogin = (acc) => {
    const query = `SELECT * FROM user WHERE user = '${acc.user}' AND PASSWORD = '${acc.password}'`;

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