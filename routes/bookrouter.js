var express=require('express');
const router=express.Router();
var bookarr=[{
    btitle:"born a crime", 
    genre: "biography" ,
    author:"by Trevor nova",
    image:"https://kbimages1-a.akamaihd.net/48fc5df0-a8e0-4c24-8dd5-9d836d29296a/353/569/90/False/born-a-crime.jpg"
   },
   {
       btitle:"The Hunger Games", 
       genre: "fiction" ,
       author:"by Suzanne Collins" ,
       image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447303603l/2767052.jpg"
   },
   {
    btitle:"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", 
    genre: "biography" ,
    author:"by Ashlee Vance ",
    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1518291452l/25541028.jpg"
   }]
router.get("/",function(req,res){
    res.render("books",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],bookr:bookarr})  
  
})
router.get("/:id",function(req,res){
    var id=req.params.id
    console.log(id)
    
    res.render("singlebook",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],bookr:bookarr[id]})  
  
})
module.exports=router;