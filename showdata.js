var mysql=require("mysql2");

var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Garfield@1859",
        database:"mydb1"
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("connection done");
    var query="select * from garfield;";
    con.query(query,function(err,result)
    {
        if(err) throw err;
        console.log(result);
    })
})