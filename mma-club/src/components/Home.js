import React , {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Button} from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import BoingPic from '../assets/boing.png';

const Container = styled.div`
  display:flex;
  width:70%;
  height:80%;
  margin-left: auto;
  margin-right: auto;
  margin-top:3%;
  text-align:center;
`;

const Promo = styled.div`
  font-family: Arial Black;
  font-size: 100px;
  width:70%;
  height:80%;
  margin-left: auto;
  margin-right: auto;
  margin-top:3%;

`;

class Home extends Component{
    render(){
        return(
            <Container>
                <Promo>
                    "Boing"
                    <p></p>
                    <h1 >The Sound of our Punches</h1>
                </Promo>
            
                <Container >
                    <Image src={BoingPic} style={{width: '350px', height:'350px'}} roundedCircle />
                </Container>
            </Container>
        )
    }
}

export default Home;