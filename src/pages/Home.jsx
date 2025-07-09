import styled from 'styled-components'
import { Main } from '../components/Semantico.js'
import { textPagina,TextConteinerDestaque, } from '../components/Objetos.js'
import {ConteinerDestaque,ConteinerLateralright,ConteinerLateralLeft,ConteinerCards } from '../components/Conteiner.js'
import { Cards } from '../components/Cards.js'
import {AnimarConteinerLateralLeft,AnimarConteinerLateralRight} from '../components/Animacoes.jsx'
function Home (){
    return(
        <>
        <Main>
             <h1>{textPagina.descricao}</h1>
             <ConteinerDestaque>
                    <h1>{TextConteinerDestaque.titulo}</h1>
                    <p>{TextConteinerDestaque.descricao}</p>
             </ConteinerDestaque>
                

             
            <AnimarConteinerLateralLeft/>
            <AnimarConteinerLateralRight/>
                      
             <ConteinerCards>
                <Cards>
                    card 1
                </Cards>
                <Cards>
                    card 2
                </Cards>
                <Cards>
                    card 3
                </Cards>
             </ConteinerCards>
        </Main>
       
        </>
    )



}
export default Home