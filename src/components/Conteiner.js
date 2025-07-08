import styled from "styled-components";

export const ConteinerDestaque = styled.div`
    display:flex;
    flex-direction: column;
    width: 60rem;
    height: 30rem;
    border-radius: 5%;
    background-color: #F5DEB3;
    

        h1 {
            font-size: 1.5rem;
            color: #000;
            text-align: center;
        }
        p {
            font-size: 1rem;
            color: #333;
            text-align: center;
        }



`

export const ConteinerLateralLeft = styled.div`
    display:flex;
    flex-direction: column;
    width: 40rem;
    height: 15rem;
    align-self: flex-start;
    border-radius: 5%;
    background-color: #F5DEB3;



`
export const ConteinerLateralright = styled(ConteinerLateralLeft)`

    align-self: flex-end;

`

export const ConteinerCards = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;    
    height: 100%;
    
`
export const ConteinerFooter = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 100%;
    background-color: #D2B48C;
    border-radius: 10px;

`
