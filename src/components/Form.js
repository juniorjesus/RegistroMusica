import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [estudiante, setEstudiante] = useState({
        Agrupacion: '',
        Genero: '',
        Artista: '',
        Titulo: '',
        Lanzamiento: '',
        direccion: '',
        portada: ''
    })

    const {Agrupacion,Genero,Artista,Titulo,Lanzamiento,direccion,portada} = estudiante;

    const postData = () => {
         axios.post(url,estudiante)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setEstudiante({
          ...estudiante,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            estudiante.portada = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Musicas</h2>
           <hr/>
               <div>
                   <label>Agrupación </label>
                   <input id="inputAgrupacion" name="Agrupacion" value={Agrupacion} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Genero</label>
                   <select id="selectTipo" name="Genero" value={Genero} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="C.C" value="C.C">Pop</option>
                       <option name="T.I" value="T.I">Soul</option>
                       <option name="C.E" value="C.E">Rock</option>
                   </select>
               </div>
               <div>
                   <label> Artista</label>
                   <input id="inputArtista" type="text" name="Artista" value={Artista} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Titulo</label>
                   <input id="inputTitulo" type="text" name="Titulo" value={Titulo} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Lanzamiento</label>
                   <input id="inputLanzamiento" type="text" name="Lanzamiento" value={Lanzamiento} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Dirección</label>
                   <input id="inputDireccion" name="direccion" value={direccion} onChange={handleChanged}/>
               </div>
               <div>
                   <label>portada</label>
                   <input id="botonImagen" type="file" name="imagen" value={portada}    onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
