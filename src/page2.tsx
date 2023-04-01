import * as React from 'react';
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

function card(mode: string, job:string, title:string, description:string, imageSrc: string, imageWidth: number, imageHeight: number) {
    return (
        <React.Fragment>
        <CardContent>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
            <img src={imageSrc} alt="card image" style={{width: `${imageWidth}px`, height: `${imageHeight}px`, marginRight: '10px'}}/>
                <Typography sx={{ fontSize: 14, textAlign: "center" }} color={mode === "dark" ? "white" : "black"}>
                {job}
                </Typography>
            </div>
                <Typography sx={{ fontSize: 14, mb: 2, textAlign: "center" }} color={mode === "dark" ? "#C5C5C5" : "#8A8A8A"} gutterBottom>
                {title}
                </Typography>
                <Typography variant="body2" color={mode === "dark" ? "#C5C5C5" : "#8A8A8A"} sx={{ textAlign: "center" }}>
                {description}
                </Typography>
        </CardContent>
        </React.Fragment>
    )
};

type Page2Props = {
    mode: string;
}

function Page2({mode}: Page2Props) {
    return (
        <div id="pg2"
            style={{
            backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
            color: mode === 'light' ? "#121212" : "#ffffff",
            display: 'flex',
            alignItems: 'flex-start',
            height: '100vh',
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%'
            }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '320px',
                    zIndex: 3,
                    backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                    borderColor: mode === 'dark' ? "#ffffff" : "#121212", // Change border color based on mode
                    borderWidth: '2px', // Add border width
                    borderStyle: 'solid', // Add border style
                }}    
                variant="outlined">
                    {card(mode, "Department of National Defense",
                        "Defensive Cyber Operations Specialist",
                        "Analyzed and parsed alert and activity logs from aircraft systems using an ELK stack.",
                        dnd, 30, 38)}
                </Card>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '320px',
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
                        huawei, 45, 38)}
                </Card>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '320px',
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
                        ford, 66, 24)}
                </Card>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '320px',
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
                        wloo, 40, 40)}
                </Card>
            </Box>
        </div>
    )
}

export default Page2;
