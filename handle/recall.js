const db = require('./index')

exports.checkProductLine = (data) => {
    const query = `select san_pham.id_sp from ban_hang join san_pham on ban_hang.id_sp=san_pham.id_sp
                where san_pham.id_dsp='${data.iddsp}' and san_pham.id_sx='${data.idsx}' and san_pham.ngaysx>='${data.date1}' and san_pham.ngaysx<='${data.date2}' and san_pham.id_tt in (3,7);`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}

exports.recall = (data) => {
    const query = `insert into temp(id_sp) 
                select san_pham.id_sp from ban_hang join san_pham on ban_hang.id_sp=san_pham.id_sp
                where san_pham.id_dsp='${data.iddsp}' and san_pham.id_sx='${data.idsx}' and san_pham.ngaysx>='${data.date1}' and san_pham.ngaysx<='${data.date2}' and san_pham.id_tt in (3,7);
    
                update san_pham
                set san_pham.id_tt=10
                where san_pham.id_sp in (SELECT * from temp);
    
    delete from temp;`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}