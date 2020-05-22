import React , {Component} from 'react';
import Image from 'react-bootstrap/Image'
import JonnyPic from '../assets/jonny.jpg';
import AaronPic from '../assets/Aaron.jpg';
import Profile from '../Profile';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Layout = styled.div`
  font-family:sans-serif;
  color: black;
  display:flex;
  width:50%;
  margin-left: auto;
  margin-right: auto;
  margin-top:2%;
`;

const InstructorLabel = styled.div`
    text-align:center;
    font-family: Arial ;
    font-size: 50px;
`;

const Information = styled.p`
    margin-top:3%;
    margin-bottom:3%;
    margin-left:20%;
    margin-right:20%;
`;

class About extends Component{
    render(){
        return(
            <div>
                <InstructorLabel>Instructors</InstructorLabel>
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
                        <Profile name="Aaron" message="D1 Wrestler and BJJ blue belt" image={AaronPic}/>
                        <div>
                            <ProgressBar label={`Wrestling`} variant="success" now={90} />
                            <ProgressBar label={`BJJ`} variant="success" now={70} />
                            <ProgressBar label={`Kickboxing`} variant="warning" now={40} />
                            <ProgressBar label={`Attitude`} variant="danger" now={14} />
                        </div>
                    </div>
                
                </Layout>
                
                <Information>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </Information>
                
            </div>
        )
    }
}

export default About;