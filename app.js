var express=require('express')
const path=require("path")
var app=express();
var bookrouter=require('./routes/bookrouter')
var authorrouter=require('./routes/authorrouter')
app.get("/",function(req,res){
 res.render("index",{pagetitle:"Library",nav:[{link:"/books",title:"books"},{link:"/authors",title:"authors"}]})  
})
app.use("/books",bookrouter)
app.use("/authors",authorrouter)
app.use(express.static(path.join(__dirname,"/public")))
app.set("view engine","ejs")
app.set("views","./src/views")


app.listen(process.env.PORT || 3000, () => console.log('Server Running on http://localhost:3000'))