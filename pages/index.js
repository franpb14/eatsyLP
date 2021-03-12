import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

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
    await axios.post('/api/duda', { nombre, slug: dashify(nombre), correo, duda });
    alert("¡Gracias! Es posible que te contestemos en forma de correo.")
  }
  return (
    <>
    <Head>
      <title >Eatsy</title>
      <meta name="description" content="Landing page de una futura web destinada a personas con restricciones alimentarias."></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="logo.png" />
    </Head>
    
    <div className="container-fluid">
      <div className="header row justify-content-center">
            <img className="imgheader" src="/logoheader.png"></img>
      </div>
    </div>
        
    <div className="bloques">
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
              Eatsy es un punto de encuentro para personas con necesidades alimenticias especiales donde puedan compartir productos, 
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
              ¿De donde nace la idea?
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
              por un administrador, añadir ubicaciones a los alimentos y añadir restricciones adicionales si las cumple.
              <br></br>Todo esto tendrá una prueba gratuita sin tener que meter la tarjeta y tras ella su uso sólo costará 1.99€/mes
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
             Podemos distinguir 3 fases:<br></br>
             <ul>
               <li>
                 <strong>Primera fase:</strong> tendremos todo lo importante relacionado con los productos. 29/03/2021.
               </li>
             </ul>
             <ul>
               <li>
                 <strong>Segunda fase:</strong> la aplicación estará terminada en cuanto a funcionalidad. 12/04/2021.
               </li>
             </ul>
             <ul>
               <li>
                 <strong>Tercera fase:</strong> se arreglarán fallos y se harán posibles mejoras como el de implementar recetas con productos relacionados. 26/04/2021.
               </li>
             </ul>
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
      

    <div id="bloque6" className="bloqueverde">  
      <Fade top>
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
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Fernando Luis Sola Espinosa</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Reyes Blasco Cuadrado</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/negraMaria.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">María Marín Serrano</h4>
                  
                </div>
            
            </div>
          </div>

          </div>
        </div>
    </Fade>
      </div>
    <div id="bloque7" className="bloquemarron"> 
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
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Francisco José Perejón Barrios</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-wrong">
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Vanessa Pradas Fernández</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-wrong">
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Fernando Romero Rioja</h4>
                  
                </div>
            
            </div>
          </div>

          </div>
        </div>
    </Fade>
      </div>
  
    <div id="bloque8" className="bloqueverde"> 
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
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Pablo Cardenal Gamito</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Jose María Cornac Fisas</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Javier García Cerrada</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/negraJuanfer.jpg"/>            
                <div className="card-body">
                  <h4 className="card-title">Juan Fernández Fernández</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Estefanía Ganfornina Triguero</h4>
                  
                </div>
            
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card text-center border-success">
                <img className="card-img-top mx-auto d-block rounded" src="/negraFran.jpeg"/>            
                <div className="card-body">
                  <h4 className="card-title">Sergio Sánchez León</h4>
                  
                </div>
            
            </div>
          </div>

          </div>
        </div>
    </Fade>
      </div>

      <div id="bloque9" className="bloquemarron">
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
                  value={content.nombre}
                  onChange={onChange2}
                />
                Correo:
                <input
                  type="email"
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
                  value={content.duda}
                  onChange={onChange2}
                />
              </div>
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-primary" onClick={onSubmit2} >Enviar</button>
          </div>
          
        </div>  
        </Flip>
      </div>

    </div>
    
    

    
    </>
  );
};

export default Post;