const express = require("express");
const cors = require("cors");
require("./db/config");

const User = require('./db/User')
const Invoice = require('./db/Invoice')
const Item = require('./db/Item')

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

//Sign Up API

app.post("/register",async(req,resp)=>{

    let prevuser = await User.findOne({"username":req.body.username});

    if(prevuser){
        let result = false;
        console.log('hi1')
        resp.send(result);
    }

    else{
        console.log('hi2')

    let user = new User(req.body);
   let result = await user.save();
   result = result.toObject();
   delete result.password;
   resp.send(result);
    }
})

//Login API

app.post("/login",async (req,resp)=>{

    if(req.body.password && req.body.username){

    let user = await User.findOne(req.body).select("-password");
   
    if(user)
    {
        resp.send(user)
    }
    else{
        resp.send({result:'No User Found'})
    }
}
else{
    resp.send({result:'No User Found'})
}

})

//Save Invoice API

app.post("/invoice",async(req,resp)=>{

    let invoice = new Invoice(req.body);
    let result = await invoice.save();
    result = result.toObject();
    resp.send(result);
})

//Save Items API

app.post("/item",async(req,resp)=>{

    let item = new Item(req.body);
    let result = await item.save();
    result = result.toObject();
    resp.send(result);
})

//Get Invoice API

app.get("/search/:key", async (req,resp) => {
    let result = await Invoice.find({
        "$or":[{
            userName: {$regex: req.params.key}
        }]
    });
    resp.send(result);
})

//Get Item API

app.get("/searchitem/:key",async (req,resp) => {
    let result = await Item.find({    
           "$or":[
            {
                invoiceNumber: { $regex: req.params.key}
            }
           ]
        
    });
    resp.send(result)
})

app.listen(process.env.PORT || 5000);