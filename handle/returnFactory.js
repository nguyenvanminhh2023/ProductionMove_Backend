const db = require('./index')

exports.checkProduct = (user, data) => {
    const query = `select * 
                from bh_kho join san_pham on bh_kho.id_sp=san_pham.id_sp 
                where san_pham.id_tt=8 and bh_kho.id_bh=(SELECT bao_hanh.id_bh from bao_hanh where bao_hanh.user='${user}') and bh_kho.id_sp='${data.idsp}'`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}

exports.returnFactory = (data) => {
    const query = `insert into bh_trave(id_sp,id_bh, id_sx)
                SELECT bh_kho.id_sp,bh_kho.id_bh, '${data.idsx}'
                from bh_kho
                where bh_kho.id_sp='${data.idsp}';
                
                delete from bh_kho
                where id_sp='${data.idsp}';
                
                update san_pham
                set loai_vitri=1, id_vitri='${data.idsx}', id_tt=9
                WHERE id_sp='${data.idsp}';
                
                insert into sx_kho(id_sx,id_sp) VALUES
                ('${data.idsx}','${data.idsp}');`
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}