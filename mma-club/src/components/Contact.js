import React , {Component} from 'react';
import BoingPic from '../assets/boing.png';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const Layout = styled.div`
display:flex;
width:80%;
Height:80%;
margin-left: auto;
margin-right: auto;
margin-top:2%;
`;

const VerticalBox = styled.div`
display:block;
text-align:center;
`;

class Contact extends Component{
    render(){
        return(
            <Layout>
                
                <VerticalBox >
                    <Image src={BoingPic} style={{width: '200px', height:'200px'}} roundedCircle />
                    
                    <h5 style={{fontFamily:"Arial Black"}}>143 Queer Street New York, NY 10001</h5>
                    <h5 >(720) 589-8792</h5>
                </VerticalBox>                
                
                <VerticalBox>
                <h1 style={{fontFamily:"Arial Black"}}>2020 Academy Schedule</h1>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5:00 PM</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Sparring</td>
                    </tr>
                    <tr>
                        <td>6:00 PM</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Sparring</td>
                    </tr>
                    <tr>
                        <td>7:00 PM</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Sparring</td>
                    </tr>
                    <tr>
                        <td>8:00 PM</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Open Mat</td>
                        <td>Open Mat</td>
                        <td>Sparring</td>
                        <td>Sparring</td>
                    </tr>
                    <tr>
                        <td>9:00 PM</td>
                        <td>Happy Lemon Run</td>
                        <td>Happy Lemon Run</td>
                        <td>Happy Lemon Run</td>
                        <td>Happy Lemon Run</td>
                        <td>Happy Lemon Run</td>
                        <td>Happy Lemon Run</td>
                        <td>Happy Lemon Run</td>
                    </tr>
                </tbody>
                </Table>
                </VerticalBox>
            </Layout>
        )
    }
}

export default Contact;