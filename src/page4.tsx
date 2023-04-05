import * as React from 'react';
import './page4.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import {SocialIcon} from 'react-social-icons';

type Page4Props = {
    mode: string;
}

function Page4({mode}: Page4Props) {
    return (
        <>
            <div id="pg4"
            className="pageFour"
                style={{
                backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                color: mode === 'light' ? "#121212" : "#ffffff"
            }}>
                <div className="border4"
                style={{
                    border: mode === 'dark' ? '1px solid white' : '1px solid black',
                }}>

                    <Typography sx={{zIndex: '3', left: '0', right: '0', marginTop: '160px', marginLeft: 'auto', marginRight: 'auto', fontSize: 40, mb: 2, textAlign: "center", fontFamily: 'NunitoSans'}} color={mode === "dark" ? "white" : "black"}>
                        Contact
                    </Typography>
                    
                    <div style={{height: '20px'}}/>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="https://www.danielthero.com/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Button className="resume-link"
                            variant="outlined"
                            sx={{
                                borderRadius: '1px',
                                display: 'inline-flex',
                                mx: 'auto',
                                textTransform: 'none',
                                textDecoration: 'none',
                                zIndex: '3',
                                borderColor: mode === 'light' ? '#121212' : '#ffffff',
                                color: mode === 'light' ? '#121212' : '#ffffff'
                            }}>
                            Resume
                            </Button>
                        </a>
                    </div>
                    
                    <div style={{height: '20px'}}/>

                    <Container component="div" sx={{ display: "flex", justifyContent: "left", backgroundColor: mode === 'light' ? "#ffffff" : "#121212", flexDirection: "column"}} maxWidth = {false} id="contact">
                    <Typography sx={{textAlign: "center", zIndex: '2'}}><SocialIcon fgColor="white" url="https://www.linkedin.com/in/danielthero/" />      <SocialIcon fgColor="white" url="https://github.com/DanielT504" />      <SocialIcon fgColor="white" url="mailto:dthero@uwaterloo.ca" /> </Typography>
                    </Container>

                    <div className="buffer"/>
                </div>

                <div style={{height: '15px'}}/>
            </div>
        </>
    )
}

export default Page4;