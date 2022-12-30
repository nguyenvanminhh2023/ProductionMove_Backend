const db = require('./index')

exports.getWarehouseAgency = (user) => {
    const query = `select dl_kho.id_sp,dong_san_pham.ten, trang_thai.mota_tt 
                from dl_kho join san_pham on dl_kho.id_sp=san_pham.id_sp 
                join trang_thai 
                on san_pham.id_tt=trang_thai.id_tt 
                join dong_san_pham 
                on san_pham.id_dsp=dong_san_pham.id 
                where dl_kho.id_dl=(SELECT dai_ly.id_dl from dai_ly where dai_ly.user='${user}');`

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