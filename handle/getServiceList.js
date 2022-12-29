const db = require('./index')

exports.getServiceList = () => {
    const query = 'SELECT * from bao_hanh';

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