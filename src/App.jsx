import { useState } from 'react'
import axios from 'axios'
import './App.css'
import CardRepo from './components/CardRepo'

function App() {
  const [usuario, setUsuario] = useState("")
  const [dataUsuario, setDataUsuario] = useState()
  const [reposUsuario, setReposUsuario] = useState()
function handleBuscar(){

axios.get(`https://api.github.com/users/${usuario}`).then(response => 
{

console.log(response.data)
setDataUsuario(response.data)
axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
  console.log(response.data)
setReposUsuario(response.data)
}
  )
})
}

  return (
    <>
    <div className='container'>
      <div className='paginaPesquisa'>
        <div className='busca'>
          <input type="text" value={usuario} name="" id="" onChange={e => setUsuario(e.target.value)}/>
          <button onClick={handleBuscar}><img src="https://i.imgur.com/lOMVTIE.png"/></button>
        </div>
        <div className='imagemBusca'>
        {/*imagem de fundo*/}
        </div>
      </div>
{
dataUsuario &&

      <div className='resultadoPesquisa'>
        <div className='header'>
          <div className='fotoPerfil'>
            <img src={dataUsuario.avatar_url} alt="" />
          </div>
          <div className='dadosPrincipais'>
            <h2>{dataUsuario.name}</h2>
            <h4>{dataUsuario.login}</h4>
          </div>
        </div>

        <div className='repositorio'>
          {
        reposUsuario && 
            
              reposUsuario.map((projeto, index) => (
                      <CardRepo project={projeto} key={index}/>


              ))
            

          }
        </div>


      </div> 

}

    </div>

      </>
  )
}

export default App
