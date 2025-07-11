import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const ConteinerDestaque1 = styled.div`
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
const ConteinerDestaque2 = styled(ConteinerDestaque1)``

const ConteinerDestaque3 = styled(ConteinerDestaque1)``

const ConteinerCarrosel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60rem;
    height: 30rem;
    margin: 50px auto; 
    border-radius: 5%; 
    overflow: hidden; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
      background-color: #F8F8F8;

    
`
export const CarrosselPrincipal = () =>{
    return(
        <ConteinerCarrosel>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                gap = {10}
                loop = {true}
                navigation = {false}
                autoplay={{ delay: 2000 }}
                speed={1000}          
            >
                <SwiperSlide>
                    <ConteinerDestaque1>
                        <h1>Slide 1</h1>
                        <p>Conteúdo do primeiro slide.</p>
                    </ConteinerDestaque1>
                </SwiperSlide>   
                <SwiperSlide>
                    <ConteinerDestaque2>
                        <h1>Slide 2</h1>
                        <p>Conteúdo do segundo slide.</p>
                    </ConteinerDestaque2>

                </SwiperSlide>
                <SwiperSlide>
                    <ConteinerDestaque3>
                        <h1>Slide 3</h1>
                        <p>Conteúdo do terceiro slide.</p>
                    </ConteinerDestaque3>
                </SwiperSlide>
            </Swiper>
        
        </ConteinerCarrosel>
    )

}