
import './App.css'
import { Outlet, Link } from 'react-router-dom';
import { Footer, Header,Nav } from './components/Semantico';
import { FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";
import {ConteinerFooter} from './components/Conteiner';
import { color } from 'framer-motion';
import { Icones } from './components/Icones';


function App() {

  return (
    <>
        
      <Header>
       
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </Nav> 
         <h1>MarceNart</h1>  
      </Header>
      <Outlet /> 
       <Footer>
        <ConteinerFooter>
        <h3>MarceNart</h3>
            <p>o lugar onde ideias viram arte</p>

            <p>siga os as nossas redes socais</p>
           <Icones>
            <FaInstagram color='#fffff' size={'2rem'}/>
            <FaGithub size={'2rem'}/>
            <FaLinkedin size={'2rem'}/>
        </Icones>
        <h3>Desenvolvido por: Wesley Mendes Barboza</h3>
     
        </ConteinerFooter>
       </Footer>
    
    
    </>
  )
}

export default App
