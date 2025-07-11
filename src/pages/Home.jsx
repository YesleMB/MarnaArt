import styled from 'styled-components'
import { Main } from '../components/Semantico.js'
import { textPagina,TextConteinerDestaque, } from '../components/Objetos.js'
import {ConteinerDestaque,ConteinerLateralright,ConteinerLateralLeft,ConteinerCards } from '../components/Conteiner.js'
import { Cards } from '../components/Cards.js'
import {AnimarConteinerLateralLeft,AnimarConteinerLateralRight} from '../components/animation/Animacoes.jsx'
import { CarrosselPrincipal } from '../components/animation/Carrossel.jsx'
function Home (){
    return(
        <>
        <Main>
             <h1>{textPagina.descricao}</h1>
            <CarrosselPrincipal/>

             
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