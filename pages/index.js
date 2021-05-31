import { useEffect, useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
 

const Post = () => {
  const [content, setContent] = useState({
    correo: undefined,
    duda:undefined,
  })
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onChange2 = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = async () => {
    const { correo } = content;
    await axios.post('/api/entry', { correo, slug: dashify(correo)});
    alert("¡Gracias! Te iremos informando vía correo. En el momento que quieras desuscribirte simplemente responde a uno diciéndolo.")
  }
  const onSubmit2 = async () => {
    const { nombre, correo, duda } = content;
    if( nombre && nombre.trim()!="" || correo && correo.trim() != "" || duda && duda.trim() != ""){

      await axios.post('/api/duda', { nombre, slug: dashify(nombre), correo, duda });
      alert("¡Gracias! Es posible que te contestemos en forma de correo.")
    } else {

      alert("Rellena los campos");
      return false;
    }
  }
  function Video() {
    useEffect(() =>{

      document.getElementById("bloqueanuncio").style.height = window.innerHeight;
      document.getElementById("youtubevideo").height = 720 / (1280 / parseInt(getComputedStyle(document.getElementById("youtubevideo")).width));
      window.onresize = () => {

        document.getElementById("bloqueanuncio").style.height = window.innerHeight;
        document.getElementById("youtubevideo").height = 720 / (1280 / parseInt(getComputedStyle(document.getElementById("youtubevideo")).width));
      }
    
    });
  }
  function Video2() {
    useEffect(() =>{

      document.getElementById("bloqueanuncio2").style.height = window.innerHeight;
      document.getElementById("youtubevideo2").height = 720 / (1280 / parseInt(getComputedStyle(document.getElementById("youtubevideo2")).width));
      window.onresize = () => {

        document.getElementById("bloqueanuncio2").style.height = window.innerHeight;
        document.getElementById("youtubevideo2").height = 720 / (1280 / parseInt(getComputedStyle(document.getElementById("youtubevideo2")).width));
      }
    
    });
  }
  const [modalOpen, setModalOpen] = useState(false);
  function preguntaPlan(){
    useEffect(() => {
      let botonesSubmit = document.querySelectorAll(".button-submit");
      let planes = [1, 3, 6]
      let it = 0;
      botonesSubmit.forEach(el => {
        let porcentaje = planes[it];
        el.onclick=()=>{
          $('#exampleModalLong').modal('hide');
          document.getElementById("DudaTextArea").value= "Me gustaría saber más acerca del plan para obtener un " + porcentaje + '%'
          window.scroll(0,100000);
          
        }
        it++;
      });
    })
  }
  function cambiaVideo() {
    useEffect(() =>{
      let video = document.getElementById("youtubevideo");
      let enlace =  document.getElementById("enlaceCambiarVideo");
      let mensajeAdicional = document.getElementById("mensajeAdicional");
      let fotoPublicitaria = document.getElementById("fotoPublicitaria")
      enlace.onclick = () => {
        if(enlace.innerText === "¿Quieres invertir?"){
          video.src = "https://www.youtube.com/embed/0EavQQiD_VA";
          enlace.innerHTML = "Volver al video de usuario";
          mensajeAdicional.style.opacity = "1";
          mensajeAdicional.style.cursor = "pointer";
          mensajeAdicional.onclick = () => setModalOpen(!modalOpen)
          fotoPublicitaria.src = "twitter_inversores.png";
        } else {
          video.src = "https://www.youtube.com/embed/A5yi0hIzaFw";
          enlace.innerHTML = "¿Quieres invertir?";
          mensajeAdicional.style.opacity = "0";
          mensajeAdicional.style.cursor = "default";
          mensajeAdicional.onclick = () => console.log();
          fotoPublicitaria.src = "twitter_usuario.png";
        }
      }
    });      
  }
  return (
    <>
    <Head>
      <title >Eatsy</title>
      <meta name="description" content="Landing page de una futura web destinada a personas con restricciones alimentarias."></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Abril+Fatface" />
      <link rel="shortcut icon" href="logo.png" />
    </Head>
    <div className="container-fluid">
    <div className="row justify-content-center">
     </div>
      <div className="header row justify-content-center">
          <img className="imgheader" src="/logoheader.png"></img>
      </div>
    </div>

    < div >
      <div id="bloqueanuncio" >  

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Plan de inversiones</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <PricingTable  highlightColor='#a1c448'>
            <PricingSlot onLoad={preguntaPlan()}  highlighted buttonText='PREGUNTAR' title='Obtén un 1%' priceText='612.10€'>
                <PricingDetail> <b>6</b> paquetes disponibles</PricingDetail>
                <PricingDetail> <b>100</b> acciones</PricingDetail>
            </PricingSlot>
            <PricingSlot highlightColor='#a1c448' highlighted buttonText='PREGUNTAR' title='Obtén un 3%' priceText='1836.30€'>
                <PricingDetail> <b>6</b> paquetes disponibles</PricingDetail>
                <PricingDetail> <b>300</b> acciones</PricingDetail>
            </PricingSlot>
            <PricingSlot highlightColor='#a1c448' highlighted buttonText='PREGUNTAR' title='Obtén un 6%' priceText='3672.60€'>
                <PricingDetail> <b>4</b> paquetes disponibles</PricingDetail>
                <PricingDetail> <b>600</b> acciones</PricingDetail>
            </PricingSlot>
        </PricingTable>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
        <Fade right>
          <div onLoad={Video()}  className="container">
            <div className="row justify-content-center">
              <div className="titleblock col-12">
                Nuestra comunidad te espera
              </div> 
            </div>
            <div className="row justify-content-center">
              <div className="col-12 text-center mb-3">
                <strong>
                <a className="link" id="enlaceCambiarVideo" onLoad={cambiaVideo()} href="#">¿Quieres invertir?</a>

                </strong>
                <div id="mensajeAdicional" data-toggle="modal" data-target="#exampleModalLong">Pincha aquí para ver planes de inversión</div>
              </div>
            </div>
            <div className="row  justify-content-center">
              <div id="widthvideo" className="col-12">
                <iframe id="youtubevideo" width="100%"  src="https://www.youtube.com/embed/A5yi0hIzaFw" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div id="redes" className="row  justify-content-center">
              <div id="bodyblockanuncio" className="bodyblock col-12 text-center">
                Síguenos en las redes
              </div>
            </div>
            <div className="row  justify-content-center">
              <a href="https://twitter.com/eatsy2021" target="_blank" className="btn-social btn-twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/eatsy_app/" target="_blank" className="btn-social btn-instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UCdHxzRKVBnA71caIyhaMdIg" target="_blank" className="btn-social btn-youtube"><i className="fab fa-youtube"></i></a>
             </div>
          </div>
          
        </Fade>
      </div>

      <div className="container ">


      </div>
      <Flip left>
        <div id="bloqueTwitter">
          <div className="container ">
            <div className="row justify-content-center mt-sm-5">
                <img id="fotoPublicitaria" className="col-sm-10" src="twitter_usuario.png"></img>
            </div>
          </div>
        </div>
      </Flip> 
      <div id="bloque1" className="bloquemarron">  
      
      <Fade left>
        <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿Qué es Eatsy?
            </div> 
          </div>
          <div className="row justify-content-center">
          <div className="col-lg-3 col-6">
              <img className="comida" src="comida.png"></img>
            </div> 
            <div id="bodyblock1" className="bodyblock col-md-5">
              Eatsy es un punto de encuentro para personas con necesidades alimenticias especiales dónde puedan compartir productos, 
              dónde adquirirlos y su experiencia para hacer su vida más deliciosa.
            </div> 
          </div>
        </div>
        
      </Fade>
      </div>

      <div id="bloque2" className="bloqueverde">

      <Flip right>
      <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿De dónde nace la idea?
            </div> 
          </div>
          <div className="row justify-content-center">
          
            <div id="bodyblock1" className="bodyblock col-md-5">
              Nace como un proyecto estudiantil para la Universidad de Sevilla y 
              tras un estudio exhaustivo del mercado creemos que dichas personas no tienen recursos suficientes para encontrar buenos productos.
            </div> 
            <div className="col-lg-3 col-6">
              <img className="comida" src="comiendo.png"></img>
            </div> 
          </div>
        </div>    
      </Flip>
      </div>
      <div id="bloque3" className="bloquemarron"> 
      <Fade bottom> 
        <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿Qué funcionalidad tendrá?
            </div> 
          </div>
          <div className="row justify-content-center">
          <div className="col-lg-3 col-5">
              <img className="comida" src="tenedor.png"></img>
            </div> 
            <div id="bodyblock1" className="bodyblock col-md-5">
              Los usuarios podrán filtrar productos que cumplan ciertas restricciones alimenticias (como el glúten) o sigan
              algunas dietas (como el vegetarianismo), de esos elementos se podrá saber la opinión de los usuarios sobre el mismo
              y donde encontrarlo, así como una descripción más detallada. <br></br>Además, podrán añadir ellos mismos productos que serán aprobados
              por un administrador, añadir ubicaciones a los alimentos y añadir estos productos a su "lista de la compra". Así mismo los productos
              podrán tener recetas asociadas.
              <br></br>Todo esto tendrá una prueba gratuita de un mes y tras ella su uso sólo costará 1.99€/mes. Podrás cancelar muy fácilmente.
            </div> 
          </div>
        </div>
    </Fade>
      </div>

      <div id="bloque4" className="bloqueverde">
    <Fade right >
      <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿Cuándo estará lista?
            </div> 
          </div>
          <div className="row justify-content-center">
          
            <div id="bodyblock1" className="bodyblock col-md-5">
              ¡La funcionalidad está prácticamente acabada!<br></br> Estamos preparándolo todo para el lanzamiento final que
              tendrá lugar en unas 4 semanas. Para ser el primero en enterarte del lanzamiento <a className="link" href="#redes">síguenos en nuestras redes.</a> 
             </div> 
            <div className="col-lg-3 col-6">
              <img className="comida" src="familia.png"></img>
            </div> 
          </div>
        </div>    
    </Fade>
      </div>

      <div id="bloque5" className="bloquemarron">
    <Flip top>
      <div className="container">
          <div className="titleblock col-12">
            <label htmlFor="correo">¿Quieres que te mantengamos informado?</label>
          </div>
          <div className="row justify-content-center">
            <div id="textocorreo" className="col-12">
              Te enviaremos correos con el estado de la aplicación
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-3 col-8">
                <input
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Escribe tu correo"
                  className="form-control"
                  name="correo"
                  value={content.correo}
                  onChange={onChange}
                />
              </div>
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-primary" onClick={onSubmit} >Suscribirse</button>
          </div>
          
        </div>  
        </Flip>
      </div>
      
      <div id="bloqueanuncio2" onLoad={Video2()} className="bloqueverde">
        
      <Flip right>
      <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿Quieres ver una demo?
            </div> 
          </div>
          <div className="row justify-content-center">
          <iframe id="youtubevideo2" src="https://www.youtube.com/embed/i66GLUBe0y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="row justify-content-center mt-3">
          <div className="col-lg-3 col-6">
              <a target="_blank" href="https://eatsy-official.herokuapp.com/"> <img className="comida" src="tortita.png"></img></a>
            </div> 
            <div id="bodyblock1" className="bodyblock col-md-5">
            En <a className="link" target="_blank"  href="https://eatsy-official.herokuapp.com/">este link</a> podrás probar lo último que hemos hecho. Sientete 
            libre para probarlo todo y si tienes alguna duda o sugerencia puedes ponerla debajo de esta misma página. </div> 
            
          </div>
        </div>    
      </Flip>
      </div>
      <Flip left>
        <div id="bloqueInsta">
          <div className="container">
            <div className="row justify-content-center">
                <img className="col-lg-4 col-md-6 col-sm-8 col-xs-10" src="img_instagram.jpg"></img>
            </div>
          </div>
        </div>
      </Flip> 

    <div id="bloque6" className="bloquemarron">  
      <Fade bottom>
        <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              Quiénes somos
            </div> 
            <div  className="col-12 titleblock text-center">
              Jefe de proyecto y coordinadoras
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaFers.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Fernando Luis Sola Espinosa</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaReyes.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Reyes Blasco Cuadrado</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaMaria.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">María Marín Serrano</h4>
                  
                </div>
            
            </div>
          </div>

          </div>
        </div>
    </Fade>
      </div>
    <div id="bloque7" className="bloqueverde"> 
    <Fade left> 
        <div className="container">
          <div className="row justify-content-center">
            
            <div  className="col-12 titleblock text-center">
              FrontEnd
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-wrong">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaFran.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Francisco José Perejón Barrios</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-wrong">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaVane.png"/>            
                <div className="card-body">
                  <h4 className="card-title">Vanessa Pradas Fernández</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-wrong">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaFer.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Fernando Romero Rioja</h4>
                  
                </div>
            
            </div>
          </div>

          </div>
        </div>
    </Fade>
      </div>
  
    <div id="bloque8" className="bloquemarron"> 
    <Fade right> 
        <div className="container">
          <div className="row justify-content-center">
            <div  className="col-12 titleblock text-center">
              BackEnd
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaPablo.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Pablo Cardenal Gamito</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaJose.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Jose María Cornac Fisas</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaJavi.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Javier García Cerrada</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaJuanfer.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Juan Fernández Fernández</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaEstefania.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Estefanía Ganfornina Triguero</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/blancaSergio.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Sergio Sánchez León</h4>
                </div>
            
            </div>
          </div>

          </div>
        </div>
    </Fade>
      </div>

      <div id="bloque9" className="bloqueverde">
    <Flip bottom>
      <div className="container">
          <div className="titleblock col-12">
            <label htmlFor="correo">Dudas o Sugerencias</label>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-5 col-8">
                Nombre:
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  required
                  value={content.nombre}
                  onChange={onChange2}
                />
                Correo:
                <input
                  type="email"
                  required
                  aria-describedby="emailHelp"
                  className="form-control"
                  name="correo"
                  value={content.correo}
                  onChange={onChange2}
                />
                Duda o sugerencia:
                <textarea
                  className="form-control"
                  name="duda"
                  required
                  id="DudaTextArea"
                  value={content.duda}
                  onChange={onChange2}
                />
              </div>
          </div>
          <div className="row justify-content-center">
            <button id="submitDudas" className="btn btn-primary" onClick={onSubmit2} >Enviar</button>
          </div>
          
        </div>  
        </Flip>
      </div>

    </div>
    
    

    
    </>
  );
};

export default Post;
