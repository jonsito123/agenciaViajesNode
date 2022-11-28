/*para lo cual tenemos obtenr la variable db que es la conexion a la base de datos*/ 
const {DataTypes}=require("sequelize");
const { db } = require("../config/db");

const Testimonial = db.define('testimoniales', {
   
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    mensaje:{
        type:DataTypes.STRING
    }

});
module.exports=Testimonial