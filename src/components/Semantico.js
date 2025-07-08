import styled from "styled-components";

export const Header = styled.header`
    display:flex;
    width: 100%;
    height: 10rem;
    border: 1px solid #ccc;
    justify-content: center;
    align-items: center;
    background-color: #D2B48C;

    

`
export const Footer = styled.footer`
    display: flex;
    width: 100%;
    height: 10rem;
    justify-content: center;
    align-items: center;
    background-color: #D2B48C;
    margin-top: 50px;
        
       p{
       margin: 2px;
       pagging: 0;
       botder-button: 10px solid #ccc;
       }
    



       h3{
       margin: 2px;
       pagging: 0;}

`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;

     

    
    `
export const Nav = styled.nav`
    display: flex;
    position:fixed;
    top: 0.1rem;
    justify-content: center;
    align-items: center;
    background-color: #D2B48C;
    border-radius:10px;
    width:20rem;
    height:2rem;
    

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 20px;

        li {
            a {
                text-decoration: none;
                color:rgb(0, 0, 0);
                font-weight: bold;
                transition: color 0.3s ease;

                &:hover {
                    color:rgb(153, 142, 128);
                }
            }
        }

      
    }


`