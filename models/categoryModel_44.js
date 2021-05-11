const db = require('../utils/database');

const Category_44 = class Category_44 {
    constructor(id,title,size,remote_url,local_url){
        this.id = id;
        this.title = title;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchAll(){
        return db.execute("SELECT * from category_44");
    }
}

module.exports = Category_44;