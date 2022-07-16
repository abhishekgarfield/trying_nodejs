var mysql=require('mysql2');

var con= mysql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"Garfield@1859",
    database:"mydb1"
});

con.connect(function(err)
{
    if(err)
    {
        throw err;
    }
    else{
        console.log("connection done");
    }
    con.query("create table garfield(name varchar(22), sr int)" ,function(err, result)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log("table created");
        }
    })
})