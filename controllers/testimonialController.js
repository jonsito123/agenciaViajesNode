const Testimonial = require("../models/testimonial");

const guardarTestimonial=(req,res)=>{
 console.log(req.body)
 const  {nombre,correo,mensaje}=req.body;

 /*validadcion*/

 /*voy a crear un arrat de errores para cada campo*/
 const errores=[];

 if(nombre.trim()===""){
    errores.push({
        nombre:"El nombre esta vacio"
    })
 }
 if(correo.trim()===""){
    errores.push({
        nombre:"El correo esta vacio"
    })
 }

 if(mensaje.trim()===""){
    errores.push({
        nombre:"El mesnaje esta vacio"
    })
 }


  /*una ves que psa el algoritmos*/

  if(errores.length>0){
 
    res.render('testimoniales',{
        pagina:'Pagina Testimoniales',
        errores,
        nombre,
        correo,
        mensaje

        

     })  
  } else {
    /*almacenando en la base de datos*/
    /*crear un testimonial*/
    Testimonial.create({
        nombre,
        correo,
        mensaje
    })
    res.redirect("/testimoniales")
  }
 


  /*guardar en la base de datos**/

  res.render('testimoniales')
}

/*paginas testimoniales*/

module.exports={
    guardarTestimonial
}