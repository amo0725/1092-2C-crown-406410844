const db = require('../utils/database');

const Clothing_44 = class Clothing_44 {
    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchAll(){
        return db.execute("SELECT * from clothing_44");
    }

    static fetchCategoryByProduct(cid){
        return db.execute("SELECT * from clothing_44 where cat_id = ?",[cid]);
    }
}

module.exports = Clothing_44;