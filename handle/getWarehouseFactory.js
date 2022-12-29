const db = require('./index')

exports.getWarehouseFactory = (user) => {
    const query = `select sx_kho.id_sp,dong_san_pham.ten, trang_thai.mota_tt 
                from sx_kho join san_pham on sx_kho.id_sp=san_pham.id_sp 
                join trang_thai 
                on san_pham.id_tt=trang_thai.id_tt 
                join dong_san_pham 
                on san_pham.id_dsp=dong_san_pham.id 
                where sx_kho.id_sx=(SELECT noi_san_xuat.id_sx from noi_san_xuat where noi_san_xuat.user='${user}');`

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