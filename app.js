const express=require("express");
const { db } = require("./config/db");

const router = require("./routes/router");
require("dotenv").config();
const app=express();
/*que rutas va a utlizar mi aplicaicon*/
app.use(express.json())
/*habilitar pug
vamos a utlilizar el view engine pug
*/


/*conecta a la base de datos*/
db.authenticate().then(()=>{
    console.log("conectado a la base de datos")
})

/*para poder ller lo que se esta enviadno*/
/*analiza la soliticudes y lo convierte a body
agregar al body-parser para ller los datos0
permiliar daots de un formulario

*/ 
app.use(express.urlencoded({
    extended:true
}))


app.set('view engine','pug')
// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');
/*desde la pagina principal agregar estas rutas*/
/*hay que congfigurar que es mi carpeta publica*/
/*definir  la carpeta public*/

/*obtener el año actual*/ 
app.use((req,res,next)=>{
    
    const year=new Date();
    /*pasa al siguiente metodo */ 
    res.locals.actualYear=year.getFullYear()
  
    return next();
 
})
app.use(express.static("public"))

/*crear tu middelwars*/

app.use("/",router)

app.listen(process.env.PORT,()=>{
    console.log("Servidor creado",process.env.PORT);
})