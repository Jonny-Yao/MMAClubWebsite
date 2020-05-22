import React , {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import BoingPic from './assets/boing.png';
import Image from 'react-bootstrap/Image';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';
import IgLogo from './assets/iglogo.jpeg';
import FbLogo from './assets/fblogo.png';

const Routing = styled.h5`
  font-family:sans-serif;
  color: black;
`;

class App extends Component{
  render(){
    return ( 
      <div >
        <Layout style={{backgroundColor:"#fafeec"}}>
            <Header style={{backgroundColor:"#373737"}} >
            <Image src={BoingPic} style={{width: '60px', height:'60px'}}  />
            </Header>
            <Drawer >
            <Image src={BoingPic} style={{width: '100px', height:'100px', margin: "10%"}}  />
                <Navigation>
                    <Link to="/"><Routing>Home</Routing></Link>
                    <Link to="/MMA-Club-Website/"><Routing>Home</Routing></Link>
                    <Link to="/about"><Routing>About Us</Routing></Link>
                    <Link to="/contact"><Routing>Contact</Routing></Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content"/>
                {/*Main is the router*/}
                <Main/>
                {/*footer code */}
                <Footer size="mini" style={{height:"13%"}}>
                    <FooterSection type="top" logo="Boing MMA">
                        <FooterLinkList>
                            <a style={{color:"white"}} href="https://www.instagram.com/ludwigmartialarts/">Instagram</a>
                            <a style={{color:"white"}} href="https://www.facebook.com/Wonderboymma/">Facebook</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>

            </Content>
        </Layout>
    </div>
   );
  }
  
}

export default App;
