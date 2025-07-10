import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { SlArrowRight,SlArrowLeft } from "react-icons/sl";

  

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
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5rem; 
        height: 100%; }

      h1 {
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 0.5rem; 
        word-wrap: break-word; 
        overflow-wrap: break-word; 
    }
    p {
        font-size: 0.9rem; 
        margin-top: 0;
        word-wrap: break-word; 
        overflow-wrap: break-word; /* Versão mais moderna 
        overflow-y: auto; 
    }
`;

export const ConteinerLateralright = styled(ConteinerLateralLeft)`

    align-self: flex-end;
    align-items: flex-end ;
    justify-content: center;
     margin-left: auto;
        div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10rem; 
        height: 100%; }}
       
 
`

const BotaoLeft = styled(motion.button)`
  position: absolute; 
  left: 90%;
  top: 25%;
  background-color: #D2B48C;
  color: white;
  width: 5rem;
  height: 6rem;
  border: none;
  border-radius:10%;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color:rgb(231, 206, 174);
  }
`;
const BotaoRight = styled.button`


 position: absolute; 
  right: 90%;
top: 25%;
  background-color:#D2B48C;
  color: white;
  width: 5rem;
  height: 6rem;
  border: none;
  border-radius:10%;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color:rgb(231, 206, 174);
  }

`

export const AnimarConteinerLateralLeft = () => {
    const [evento, setEvento] = useState(true);
    const [displayContent, setDisplayContent] = useState(false);


    return (
        <>
            <ConteinerLateralLeft
                animate={{  
                            initial: { opacity: 0, width: "15rem" }, 
                            width: evento ? "15rem" : "40rem", 
                            transition: { duration: 0.5, ease: "easeInOut" }
                }} 

                 onAnimationComplete={() => {
                if (!evento) { 
                    setDisplayContent(false); 
                }
            }}
            onAnimationStart={() => {
                if (evento) {
                    setDisplayContent(true); 
                }
            }}
>               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: displayContent ?  0 : 1 }}>
                <h1>Conteiner Lateral Esquerdo</h1>
            <p>Este é um exemplo de conteiner lateral esquerdo. Este texto é um pouco mais longo para demonstrar o comportamento de quebra de linha.</p>
                </motion.div>

                <BotaoLeft onClick={() => setEvento(!evento)}>
                    {evento ? <SlArrowRight size={"1.8rem"}/> : <SlArrowLeft size={"1.8rem"}/>}
                </BotaoLeft>
            </ConteinerLateralLeft>


        </>
    );
};


export const AnimarConteinerLateralRight = () => {
    const [evento, setEvento] = useState(true); 
    const [displayContent, setDisplayContent] = useState(false);

    return (
        <>
        <ConteinerLateralright 
            
                animate={{  
                            initial: { opacity: 0, width: "15rem" }, 
                            width: evento ? "15rem" : "40rem", 
                            transition: { duration: 0.5, ease: "easeInOut" }
                }} 

                 onAnimationComplete={() => {
                if (!evento) { 
                    setDisplayContent(false); 
                }
            }}
            onAnimationStart={() => {
                if (evento) {
                    setDisplayContent(true); 
                }
            }}
>               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: displayContent ?  0 : 1 }}
                               
                    >
                    <h1>Conteiner Lateral Direito</h1>
                    <p>um grande texto neste conteiner para ver como fica muitas informações
                    estou pondo qualquer coisa
                    </p>
                </motion.div>

            <BotaoRight onClick={() => setEvento(!evento)}
                >
                    {evento ?  <SlArrowLeft size={"1.8rem"}/> : <SlArrowRight size={"1.8rem"}/> }
            </BotaoRight>
        </ConteinerLateralright>
      </>  
    );
};