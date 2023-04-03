import * as React from 'react';
import './page3.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dnd from './pictures/Canadian_Forces_emblem.svg.png';
import huawei from './pictures/output-onlinepngtools.png';
import ford from './pictures/Ford-Motor-Company-Logo.png';
import wloo from './pictures/output-onlinepngtools (1).png';
import CardMedia from '@mui/material/CardMedia';
import database from './pictures/Database.png';
import de1 from './pictures/DE1-SoC.png';
import maze from './pictures/Maze.png';
import mountain from './pictures/Mountain.png';
import systolic from './pictures/systolic.png';
import ts from './pictures/TS.png';


function card(mode: string, job:string, title:string, description:string, time:string, imageSrc: string, imageWidth: number, imageHeight: number) {
    return (
        <CardContent sx={{ padding: '0 !important'}}>
            <CardMedia
                sx={{ height: 140 }}
                image={imageSrc}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </CardContent>
    )
};

type Page3Props = {
    mode: string;
}

function Page3({mode}: Page3Props) {
    return (
        <div id="pg3"
        className="pageThree"
            style={{
            backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
            color: mode === 'light' ? "#121212" : "#ffffff"
        }}>
            <Typography sx={{zIndex: '4', left: '0', right: '0', marginTop: '160px', marginLeft: 'auto', marginRight: 'auto', fontSize: 40, mb: 2, textAlign: "center", fontFamily: 'NunitoSans'}} color={mode === "dark" ? "white" : "black"}>
                Projects
            </Typography>
            <Box className="box" 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                margin: '0 auto',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                paddingLeft: '16px',
                paddingRight: '16px',
                maxWidth: '1050px'
            }}>
                <Card className="card5"
                sx={{
                    width: '320px',
                    minHeight: '196px',
                    zIndex: 3,
                    backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                    borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                    borderWidth: '2px',
                    borderStyle: 'solid',
                }}    
                variant="outlined">
                    {card(mode, "Department of National Defense",
                        "Defensive Cyber Operations Specialist",
                        "Analyzed and parsed alert and activity logs from aircraft systems using an ELK stack.",
                        "Jan-Apr 2023",
                        de1, 30, 38)}
                </Card>
                <Card className="card6"
                sx={{
                    width: '320px',
                    minHeight: '257px',
                    zIndex: 3,
                    backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                    borderColor: mode === 'dark' ? "#ffffff" : "#121212", // Change border color based on mode
                    borderWidth: '2px', // Add border width
                    borderStyle: 'solid', // Add border style
                }}    
                variant="outlined">
                    {card(mode, "Huawei Technologies Canada",
                        "Real-Time Operating System (RTOS) Software Engineer",
                        "Designed C++ and Python performance tests to research and implement optimizations for the unreleased HarmonyOS (aka HongMeng OS) 4.0 microkernel.",
                        "May-Aug 2022",
                        ts, 45, 38)}
                </Card>
                <Card className="card7"
                sx={{
                    width: '320px',
                    minHeight: '222px',
                    zIndex: 3,
                    backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                    borderColor: mode === 'dark' ? "#ffffff" : "#121212", // Change border color based on mode
                    borderWidth: '2px', // Add border width
                    borderStyle: 'solid', // Add border style
                }}    
                variant="outlined">
                    {card(mode, "Ford Motor Company",
                        "Embedded Software Developer",
                        "Developed C++ production code for 2022 Ford vehicles including the improved reception of wireless NFC signals and developer debug commands.",
                        "Sep-Dec 2021",
                        mountain, 66, 24)}
                </Card>
                <Card className="card8"
                sx={{
                    width: '320px',
                    minHeight: '218px',
                    zIndex: 3,
                    backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                    borderColor: mode === 'dark' ? "#ffffff" : "#121212", // Change border color based on mode
                    borderWidth: '2px', // Add border width
                    borderStyle: 'solid', // Add border style
                }}    
                variant="outlined">
                    {card(mode, "University of Waterloo",
                        "Open-Source Developer",
                        "Contributed functionality in Java to support JSON queries in the open-source Apache Drill SQL query engine.",
                        "Jan-Apr 2021",
                        database, 40, 40)}
                </Card>
                <Card className="card8"
                sx={{
                    width: '320px',
                    minHeight: '218px',
                    zIndex: 3,
                    backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                    borderColor: mode === 'dark' ? "#ffffff" : "#121212", // Change border color based on mode
                    borderWidth: '2px', // Add border width
                    borderStyle: 'solid', // Add border style
                }}    
                variant="outlined">
                    {card(mode, "University of Waterloo",
                        "Open-Source Developer",
                        "Contributed functionality in Java to support JSON queries in the open-source Apache Drill SQL query engine.",
                        "Jan-Apr 2021",
                        systolic, 40, 40)}
                </Card>
                <Card className="card8"
                sx={{
                    width: '320px',
                    minHeight: '218px',
                    zIndex: 3,
                    backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                    borderColor: mode === 'dark' ? "#ffffff" : "#121212", // Change border color based on mode
                    borderWidth: '2px', // Add border width
                    borderStyle: 'solid', // Add border style
                }}    
                variant="outlined">
                    {card(mode, "University of Waterloo",
                        "Open-Source Developer",
                        "Contributed functionality in Java to support JSON queries in the open-source Apache Drill SQL query engine.",
                        "Jan-Apr 2021",
                        maze, 40, 40)}
                </Card>
            </Box>
        </div>
    )
}

export default Page3;
