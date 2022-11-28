const { promiseCallback } = require("express-fileupload/lib/utilities")
const Testimonial = require("../models/testimonial")
const Viaje = require("../models/viajes")

/*LA TABLA DE LA BASE DE DATOS*/

const paginaInicio=async(req,res)=>{

    const promiseDB=[]
    promiseDB.push(Viaje.findAll({
        limit:3
    }))
    promiseDB.push(Testimonial.findAll({
        limit:3
    }))
    
  try {
    /*limit para obtener los  3 primeros viajes noams */
    
    const resultado=await Promise.all(promiseDB);

    res.render("inicio",{
        pagina:"Inicio",
        clase:"home",
        viajes:resultado[0],
        testimoniales:resultado[1]
     })
    
  } catch (error) {
    throw new Error(error) 
  }
     
   }

   const paginaNosotros=(req,res)=>{

  
    res.render("nosotros",{

        pagina:"Nosotros"
    })
}

const paginaViaje=async(req,res)=>{
  
    try {
        const viajes=await Viaje.findAll();
        res.render("viajes",{
            pagina:"Proximos Viajes",
            viajes:viajes
        })
    } catch (error) {
        
    }
}

const paginaTestimoniales=async(req,res)=>{
    try {
        /*renderizar una vista*/
    const testimoniales=await Testimonial.findAll();
    res.render("testimoniales",{
        pagina:"Testimoniales",
        testimoniales
      })
    } catch (error) {
        throw new Error(error)
    }
 }

 /*viajes controller*/

 const detalleViaje=async(req,res)=>{
  const viaje=req.params.viaje;

  try {
    const resultado= await Viaje.findOne({
        where:{
            slug:viaje
        }
    })
   console.log(resultado)
    res.render('viaje',{
        pagina:'Informacion Viaje',
        resultado:resultado
    })
  } catch (error) {
    throw new Error(error)
  }
 }
module.exports={
    paginaInicio,
    paginaNosotros,
    paginaViaje,
    paginaTestimoniales,
    detalleViaje
}