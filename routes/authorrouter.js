var express=require('express');
const router=express.Router();
var authorarr=[{
    btitle:"J. K. Rowling", 
    genre: "novelist" ,
    author:"Rowling, is a British novelist, screenwriter, producer, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies becoming the best-selling book series in history.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/220px-J._K._Rowling_2010.jpg"
   },
   {
       btitle:"George R. R. Martin", 
       genre: "novelist" ,
       author:"George Raymond Richard Martin also known as GRRM, is an American novelist and short story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer. He is best known for his series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones." ,
       image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg/220px-Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg"
   },
   {
    btitle:"jumpa lahiri", 
    genre: "short stories" ,
    author:"Laihiri is well known for her novels, essays and short stories. She was born in London but relocated to the United States to get her education from the Barnard College. She went ahead for her masters and attained her degree from the Boston University. She was a struggling writer and her work was initially rejected by the publishers until her biggest success, ‘The interpreter of Maladies’. This was a compilation of all her short stories about the life of immigrants in post-partition India. After the runaway success she wrote many other novels which are famous throughout the Indian continent and the world. Some of the most famous ones being; The namesake, Unaccustomed Earth and The lowland.",
    image:"https://www.famousauthors.org/famous-authors/jhumpa-lahiri.jpg"
   }]
router.get("/",function(req,res){
    res.render("authors",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],authorr:authorarr})  
  
})
router.get("/:id",function(req,res){
    var id=req.params.id
    console.log(id)
    
    res.render("singleauthor",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}],authorr:authorarr[id]})  
  
})
module.exports=router;