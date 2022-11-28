const {Router}=require("express");
const { paginaInicio, paginaNosotros, paginaViaje, paginaTestimoniales,detalleViaje } = require("../controllers/paginasController");
const { guardarTestimonial } = require("../controllers/testimonialController");
const router=Router();
/*rutas y controlador*/

router.get("/",paginaInicio)

router.get("/nosotros",paginaNosotros)



 
router.get("/viajes",paginaViaje)

/*pagina viaje detalle*/
router.get("/viajes/:viaje",detalleViaje)
 
    
router.get("/testimoniales",paginaTestimoniales)

/*peticion post**/

router.post("/testimoniales",guardarTestimonial)


   module.exports=router