const Sequelize=require("sequelize");
require("dotenv").config();
const db =new Sequelize(process.env.BB_NAME,process.env.DB_USER,process.env.DB_PASSW,{
    host:'localhost',
    dialect:'mysql',
    port:'3306',
    "logging": false,
    /*te crea dos columnas cuando fue creada y actualziada*/ 
    define:{
        timestamps: false

    },
    pool:{
        max:5,
        min:0,
        require:30000,
        idle:10000 
    }
});

module.exports={
    db
}

