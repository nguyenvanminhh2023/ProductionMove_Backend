const db = require('./index')

exports.getAgencyList = () => {
    const query = 'SELECT * from dai_ly';

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