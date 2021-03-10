import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Post = () => {
  const [content, setContent] = useState({
    correo: undefined,
  })
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = async () => {
    const { correo } = content;
    await axios.post('/api/entry', { correo, slug: dashify(correo) });
    alert("¡Gracias! Te iremos informando.")
  }
  return (
    <>
    <Head>
      <title>Eatsy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="container-fluid">
      <div className="header row justify-content-center">
            <img className="imgheader" src="/logoheader.png"></img>
      </div>
    </div>
        
    <div className="bloques">
      <div className="bloquemarron">  
        <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿Qué es Eatsy?
            </div> 
          </div>
          <div className="row justify-content-center">
          <div className="col-sm-3 col-6">
              <img className="comida" src="comida.png"></img>
            </div> 
            <div id="bodyblock1" className="bodyblock col-sm-5">
              Eatsy es un punto de encuentro para personas con necesidades alimenticias especiales donde puedan compartir productos, 
              dónde adquirirlos y su experiencia para hacer su vida más deliciosa.
            </div> 
          </div>
        </div>
      </div>
      
      
      <div className="bloqueverde">
      <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿De donde nace la idea?
            </div> 
          </div>
          <div className="row justify-content-center">
          
            <div id="bodyblock1" className="bodyblock col-sm-5">
              Nace como un proyecto estudiantil para la Universidad de Sevilla y 
              tras un estudio exhaustivo del mercado creemos que dichas personas no tienen recursos suficientes para encontrar buenos productos.
            </div> 
            <div className="col-sm-3 col-6">
              <img className="comida" src="comiendo.png"></img>
            </div> 
          </div>
        </div>    
      </div>

      <div className="bloquemarron">  
        <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿Qué funcionalidad tendrá?
            </div> 
          </div>
          <div className="row justify-content-center">
          <div className="col-sm-3 col-5">
              <img className="comida" src="tenedor.png"></img>
            </div> 
            <div id="bodyblock1" className="bodyblock col-sm-5">
              Los usuarios podrán filtrar productos que cumplan ciertas restricciones alimenticias (como el glúten) o sigan
              algunas dietas (como el vegetarianismo), de esos elementos se podrá saber la opinión de los usuarios sobre el mismo
              y donde encontrarlo, así como una descripción más detallada. <br></br>Además, podrán añadir ellos mismos productos que serán aprobados
              por un administrador, añadir ubicaciones a los alimentos y añadir restricciones adicionales si las cumple.
              <br></br>Todo esto tendrá una prueba gratuita sin tener que meter la tarjeta y tras ella su uso sólo costará 1.99€/mes
            </div> 
          </div>
        </div>
      </div>

      <div className="bloqueverde">
      <div className="container">
          <div className="row justify-content-center">
            <div className="titleblock col-12">
              ¿Cuándo estará lista?
            </div> 
          </div>
          <div className="row justify-content-center">
          
            <div id="bodyblock1" className="bodyblock col-sm-5">
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
            <div className="col-sm-3 col-6">
              <img className="comida" src="familia.png"></img>
            </div> 
          </div>
        </div>    
      </div>

      <div className="bloquemarron">
      <div className="container">
          <div className="titleblock col-12">
            <label htmlFor="correo">¿Quieres que te mantengamos informado?</label>
          </div>
          <div className="row justify-content-center">
               Te enviaremos correos con el estado de la aplicación
          </div>
          <div className="row justify-content-center">
              <div className="col-sm-3 col-8">
                <input
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Escribe tu correo"
                  class="form-control"
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
      
      </div>
    </div>
    
    

    
    </>
  );
};

export default Post;