const Category_44 = require('../models/categoryModel_44');
const Clothing_44 = require('../models/clothingModel_44');

exports.getHomepage = async(req, res) => {
        let data ;
        const [row] = await Category_44.fetchAll();
        data = row;
        //res.json(data);
        res.render('crown2_44', { 
          title: 'Shengchun Feng 406410844 (async/await)' ,
          data
        });
}
exports.getCategoryByProduct = async(req, res) => {
        let cid = 0;
        let data ;

        if (req.params.product == 'hats') cid = 1;
        else if (req.params.product == 'jackets') cid = 2;
        else if (req.params.product == 'sneakers') cid = 3;
        else if (req.params.product == 'womens') cid = 4;
        else if (req.params.product == 'mens') cid = 5;
        
        const [row] = await Clothing_44.fetchCategoryByProduct(cid);
        data= row;

        res.json(data);
        /*res.render('crown2_44', { 
          title: 'Shengchun Feng 406410844 (async/await)' ,
          data
        });*/
}