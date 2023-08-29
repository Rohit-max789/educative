const express=require("express");
require("./db/conn");
const User=require("./models/usermessage")
const hbs=require('hbs');
const path=require('path');

const app=express();
const port=process.env.PORT|| 3009;

const staticpath=path.join(__dirname,'../public');
const templatepath=path.join(__dirname,'../templates/views');
const partialpath=path.join(__dirname,'../templates/partials');


app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine",'hbs');
app.set("views",templatepath);
hbs.registerPartials(partialpath);







// routing
app.get("/",(req,res)=>{
res.render("index");
})

app.get("/read",(req,res)=>{
res.render("readtop");
})

app.get("/read2",(req,res)=>{
 res.render("readbelow");
 })

 app.get("/read4",(req,res)=>{
res.render("java");
})

    app.get("/read5",(req,res)=>{
        res.render("Dsa");
        })

        app.get("/read6",(req,res)=>{
            res.render("front");
            })
           
            app.get("/read7",(req,res)=>{
                res.render("back");
                })

                app.get("/read8",(req,res)=>{
                    res.render("tech");
                    })

                    app.get("/read9",(req,res)=>{
                        res.render("SDE");
                        })
           
    

app.post("/contact",async(req,res)=>{
    try{
    
    const userData=new User(req.body);
    await userData.save();
    res.status(201).render('index');

    }
    catch(error){

    res.status(500).send(error);

    }

})


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})

