import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function card(job:string, title:string, description:string) {
    return (
        <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {job}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {title}
            </Typography>
            <Typography variant="body2">
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
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <Card sx={{
                height: '400px',
                width: '200px',
                zIndex: 3
            }}    
            variant="outlined">
                {card("Department of National Defense (DND)",
                    "Defensive Cyber Operations Specialist",
                    "Analyzed and parsed alert and activity logs from aircraft systems using an ELK stack.")}
            </Card>
            <Card sx={{
                height: '400px',
                width: '200px',
                zIndex: 3
            }}    
            variant="outlined">
                {card("Huawei Technologies Canada",
                    "Real-Time Operating System (RTOS) Software Engineer",
                    "Designed C++ and Python performance tests to research and implement optimizations for the unreleased HarmonyOS (aka HongMeng OS) 4.0 microkernel.")}
            </Card>
            <Card sx={{
                height: '400px',
                width: '200px',
                zIndex: 3
            }}    
            variant="outlined">
                {card("Ford Motor Company",
                    "Embedded Software Developer",
                    "Developed C++ production code for 2022 Ford vehicles including the improved reception of wireless NFC signals and developer debug commands.")}
            </Card>
            <Card sx={{
                height: '400px',
                width: '200px',
                zIndex: 3
            }}    
            variant="outlined">
                {card("University of Waterloo",
                    "Open-Source Developer",
                    "Contributed functionality in Java to support JSON queries in the open-source Apache Drill SQL query engine.")}
            </Card>
        </div>
    )
}

export default Page2;