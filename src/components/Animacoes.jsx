import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";  

const ConteinerLateralLeft = styled(motion.div)`
   display:flex;
    flex-direction: column;
    justify-content: center;
    width: 15rem;
    height: 15rem;
    align-self: flex-start;
    border-radius: 5%;
    position: relative;
    background-color: #F5DEB3;
      1 {
        font-size: 1.2rem; /* Ajuste o tamanho da fonte se necessário */
        margin-top: 0;
        margin-bottom: 0.5rem; /* Espaço abaixo do título */
        word-wrap: break-word; /* Quebra palavras longas */
        overflow-wrap: break-word; /* Versão mais moderna */
    }
    p {
        font-size: 0.9rem; /* Ajuste o tamanho da fonte se necessário */
        margin-top: 0;
        word-wrap: break-word; /* Quebra palavras longas */
        overflow-wrap: break-word; /* Versão mais moderna */
        flex-grow: 1; /* Permite que o parágrafo ocupe o espaço restante */
        overflow-y: auto; /* Adiciona scroll se o texto for muito longo */
    }
`;

export const ConteinerLateralright = styled(ConteinerLateralLeft)`

    align-self: flex-end;
    align-items: flex-end ;
    justify-content: center;
     margin-left: auto;
    
        div {
            display: flex;
            flex-direction: column;
            justify-content: flex-end ;
            align-items: flex-end ;}
 
`

const BotaoLeft = styled.button`
  position: absolute; 
  left: 90%;
  top: 25%;
  background-color: #28a745;
  color: white;
  width: 5rem;
  height: 6rem;
  border: none;
  border-radius:10%;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #218838;
  }
`;
const BotaoRight = styled.button`


 position: absolute; 
  right: 90%;
top: 25%;
  background-color: #28a745;
  color: white;
  width: 5rem;
  height: 6rem;
  border: none;
  border-radius:10%;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #218838;
  }

`

export const AnimarConteinerLateralLeft = () => {
    const [evento, setEvento] = useState(true);

    return (
        <>
            <ConteinerLateralLeft
                animate={{
                    initial: { opacity: 0, width: "15rem" }, 
                    width: evento ? "15rem" : "40rem", 
                    transition: { duration: 0.5, ease: "easeInOut" }
                }}
            >
                <h1>Conteiner Lateral Esquerdo</h1>
            <p>Este é um exemplo de conteiner lateral esquerdo. Este texto é um pouco mais longo para demonstrar o comportamento de quebra de linha.</p>
                <BotaoLeft onClick={() => setEvento(!evento)}>
                    {evento ? "expandir" : "reduzir"}
                </BotaoLeft>
            </ConteinerLateralLeft>


        </>
    );
};

export const AnimarConteinerLateralRight = () => {
    const [evento, setEvento] = useState(true);

    return (
        <ConteinerLateralright
            animate={{
                initial: { opacity: 0, width: "15rem" }, 
                width: evento ? "20rem" : "40rem", 
                transition: { duration: 0.5, ease: "easeInOut" }
            }}
        >
            <div>
            <h1>Conteiner Lateral Direito</h1>
            <p>um grande texto neste conteiner para ver como fica muitas informações
                estou pondo qualquer coisa
            </p>
            </div>
            <BotaoRight onClick={() => setEvento(!evento)}>
                {evento ? "expandir" : "reduzir"}
            </BotaoRight>
        </ConteinerLateralright>
    );
}