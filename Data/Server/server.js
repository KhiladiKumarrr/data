const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const mysql = require('mysql2');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee_data',
});

// app.get('/', (req,res)=>{
//   const sqlInsert = "INSERT INTO employee (name,department,experience,starting_date,manager,skills,remarks) VALUES ('name','delivery','5','05-jan-2023','Kuldeep','html','heloo evey thing is fine' ) "

//  db.query(sqlInsert,(error , result)=>{
//   console.log("error",error);
//   console.log("result",result);
//   res.send("hello world");

//  })
// })



app.get("/api/get",(req,res)=>{
  const sqlGet = "SELECT * FROM employee";
  db.query(sqlGet,(error, result)=>{

    res.send(result)
  });
});


app.post("/api/post", (req,res)=>{

  const {name, department, experience, starting_date, manager, skills, remarks} = req.body;
  
  
  const sqlInsert = 'INSERT INTO employee (name, department, experience, starting_date, manager, skills, remarks) VALUES (?, ?, ?, ?, ?, ?, ?)';
   db.query(sqlInsert, [name, department, experience, starting_date, manager, skills, remarks], (error,result)=>{
    if(error){
      console.log(error);
    }
   })

})



app.delete("/api/remove/:id", (req,res)=>{

  const { id  } = req.params;
  
  
  const sqlRemove = "DELETE FROM employee WHERE id = ?";
   db.query(sqlRemove,id, (error,result)=>{
    if(error){
      console.log(error);
    }
   });

});


app.get("/api/get/:id",(req,res)=>{
  const { id  } = req.params;

  const sqlGet = "SELECT * FROM employee WHERE id = ?";
  db.query(sqlGet,id,(error, result)=>{
if(error){
  console.log(error);
}
    res.send(result)
  });
});

app.put("/api/update/:id",(req,res)=>{
  const { id  } = req.params;
  const {name, department, experience, starting_date, manager, skills, remarks} = req.body;

  const sqlUpdate = "UPDATE employee SET name=? , department=?, experience=?, starting_date=?, manager=?, skills=?, remarks=? WHERE id=?";

  db.query(sqlUpdate,[name, department, experience, starting_date, manager, skills, remarks,id],(error, result)=>{
if(error){
  console.log(error);
}
    res.send(result)
  });
});






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
