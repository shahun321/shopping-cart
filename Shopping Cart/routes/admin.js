var express = require('express');
var router = express.Router();
var productHelpers=require("../helpers/product-helpers")

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.gelAllProducts().then((products)=>{
    res.render('admin/view-products',{admin:true,products})
  })
  
});

router.get('/add-product',(req,res)=>{
  res.render('admin/add-product',{admin:true})
})
router.post('/add-product',(req,res)=>{

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log(id);
    image.mv('./public/images/'+id+'.jpg',(err)=>{
      if(!err){
        res.render("admin/add-product")
      }
    })

 })
})
router.get('/delete-product/:id',(req,res)=>{
  let proId=req.params.id
  productHelpers.deleteProduct(proId).then((reponse)=>{
    res.redirect('/admin/')
  })
})

router.get('/edit-product/:id',async (req,res)=>{
  let product=await productHelpers.getProductDetails(req.params.id)
  res.render('admin/edit-product',{product})
})
router.post('/edit-product/:id',(req,res)=>{
  productHelpers.updateProduct(req.params.id,req.body).then(()=>{
    res.redirect('/admin')
    if(req.files!=undefined){
      let image=req.files.Image
      let id=req.params.id
       image.mv('./public/images/'+id+'.jpg')
    }
  })
})

module.exports = router;
