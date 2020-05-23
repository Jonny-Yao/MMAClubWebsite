import React , {Component} from 'react';
import Image from 'react-bootstrap/Image'
import JonnyPic from '../assets/jonny.jpg';
import AaronPic from '../assets/Aaron.jpg';
import Profile from '../Profile';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

{/* used to style the 2 images so that they can be side by side*/}
const Layout = styled.div`
  font-family:sans-serif;
  color: black;
  display:flex;
  margin-left: 12%;
  margin-right: 12%;
  margin-bottom:2%;
`;

{/*used to style the word "instructor" */}
const InstructorLabel = styled.div`
    text-align:center;
    font-family: Arial Black;
    font-size: 45px;
`;
{/*used to style the blurb at the bottom of the about page */}
const Information = styled.p`
    margin-bottom:3%;
    margin-left:12%;
    margin-right:12%;
`;
{/*holds the left side info */}
const VerticalBox = styled.div`
    margin-top:2%;
    display:block;
    width:75%;
    font-family: Arial ;
`;
{/*holds the faq */}
const VerticalBox2 = styled.div`
    margin-top:2%;  
    display:block;
    width:23%;
    margin-right:2%;
    font-family: Arial ;
`;
{/*contains verticalbox and verticalbox2 */}
const HorizontalBox = styled.div`
    display:flex;
`;



class About extends Component{
    render(){
        return(
            <HorizontalBox>
                    <VerticalBox>
                    <InstructorLabel>Membership General Information</InstructorLabel>
                    
                    <Information>
                        <Card bg="Light">
                        <Card.Header>Brazilian Jiu Jitsu</Card.Header>
                            <Card.Body>
                                <Card.Title>Fundamentals BJJ </Card.Title>
                                <Card.Text>
                                The Fundamentals Program is the first level for adults (over the age of 16) beginning their Brazilian Jiu-Jitsu training. Students will learn the fundamentals of BJJ and basic techniques. The class structure is formed around a warm-up, a lesson in technique and partner training to practice the technique from the lesson.
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>
                    </Information>

                    <Information>
                        <Card bg="Light">
                        <Card.Header>Wrestling Program</Card.Header>
                            <Card.Body>
                                <Card.Title>Mixed Level Wrestling</Card.Title>
                                <Card.Text>
                                Mixed level wresting offers the opportunity to learn wrestling from our all american wrestling coach and featured member Bonkaka. Bonkaka has been successful in coaching new comers in wrestling, building platinum level game plans, and throwing back a ice cold happy lemon. Bonkaka's program is currently ranked as one of the top wrestlilng programs in the plaza (it's the only one).
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>
                    </Information>

                    <Information>
                        <Card bg="Light">
                        <Card.Header>Kickboxing Program</Card.Header>
                            <Card.Body>
                                <Card.Title>Mixed Level Kickboxing</Card.Title>
                                <Card.Text>
                                This class is a fun basic introduction to kickboxing where students learn how to kick, punch and use their knees and elbows, in addition to learning how to hold pads and work with partners. Through simple but effective 2-4 strike combinations, during 2-3 minute rounds, new students are introduced to our formula of consistency, pad work, combinations, tempo, and most importantly safety.
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>
    
                    </Information>

                    <InstructorLabel style={{marginBottom:"5%"}}>Faculty Members</InstructorLabel>

                    {/*create a profile component for each teacher */}
                        <Layout> 
                            <div style={{marginRight: "15%"}}>
                                <Profile name="John" message="Recreational Kickboxer and BJJ white belt" image={JonnyPic}/>
                                <div>
                                    <ProgressBar label={`Wrestling`} variant="danger" now={20} />
                                    <ProgressBar label={`BJJ`} variant="danger" now={25} />
                                    <ProgressBar label={`Kickboxing`} variant="warning" now={40} />
                                    <ProgressBar label={`Attitude`} variant="success" now={60} />
                                </div>
                            </div>
                            <div>
                                <Profile name="Aaron" message="D2 All American Wrestler and BJJ blue belt" image={AaronPic}/>
                                <div>
                                    <ProgressBar label={`Wrestling`} variant="success" now={90} />
                                    <ProgressBar label={`BJJ`} variant="success" now={70} />
                                    <ProgressBar label={`Kickboxing`} variant="warning" now={40} />
                                    <ProgressBar label={`Attitude`} variant="danger" now={14} />
                                </div>
                            </div>
                        
                        </Layout>
                    
                
                    </VerticalBox>

                    {/*2 vertical boxes inside a horizontalbox */}
                    <VerticalBox2 >
                    <InstructorLabel>FAQ</InstructorLabel>
                    <Accordion style={{marginTop:"2%"}}>

                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Do you allow drop ins?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>We allow drop-ins only for BJJ. A visitor day pass is $40 which allows you to train in as many classes as your schedule allows. If you’re from a Renzo Gracie affiliate school, a day pass is $20. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Are we required to wear a gi?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>We are an exclusively no gi school. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Do you offer Muay Thai classes?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>We don’t offer Muay Thai classes to the public. In order to attend this type of class, you must be a member of our academy for a significant amount of time. If you’re serious about this class, please express it to one of our coaches by throwing a spinning elbow at them. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Can I freeze my membership?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>If you go out of town, you can freeze your membership at no cost. All you have to do is fill out a “freeze form” at the academy* and provide us with a return date. Your membership payments will automatically go into effect upon your return date.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </VerticalBox2>
            </HorizontalBox>
        )
    }
}

export default About;