import React from 'react'
import styled from "styled-components";
import { Button } from '../styled/Button';

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src="./images/dices.png" alt="" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;


const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 96vh;
    align-items: center;

    .content{
     h1{
     font-size: 96px;
     white-space: nowrap;
    }

    button{
         position: relative;
         left: 305px; 
    }
    }

   
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
      display: flex;
      flex-direction: column;
      justify-content: center;
       img{
        width: 300px;
    }

    .content{
        h1{
     font-size: 50px;
    }
    button{
        position: static;
                margin-top: 20px;
    }

    }
}

`;

