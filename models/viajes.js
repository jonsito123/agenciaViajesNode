/*para lo cual tenemos obtenr la variable db que es la conexion a la base de datos*/ 
const {DataTypes}=require("sequelize");
const { db } = require("../config/db");

const Viaje = db.define('viajes', {
   
    titulo: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.STRING
    },
    fecha_ida: {
        type: DataTypes.DATE
    },
    fecha_vuelta: {
        type: DataTypes.DATE
    },
    imagen: {
        type:DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    disponibles: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    },
});
module.exports=Viaje