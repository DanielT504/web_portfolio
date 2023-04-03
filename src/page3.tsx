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


function card(mode: string, title:string, description:string, imageSrc: string) {
    return (
        <CardContent sx={{ padding: '0 !important'}}>
            <CardMedia
                sx={{ height: 140 }}
                image={imageSrc}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color={mode === "dark" ? "white" : "black"}>
                {title}
                </Typography>
                <Typography variant="body2" color={mode === "dark" ? "#C5C5C5" : "#8A8A8A"}>
                {description}
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
                    {card(mode, "Real-Time Executive",
                        "This comprises of several multithreaded elements of a real-time operating system written mostly in C and ARM, including dynamic memory and task management, inter-task communication, and I/O.",
                        de1)}
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
                    {card(mode, "Traveling Salesman Neural Network",
                        "This relies on an MIT-licensed self-organizing map (an artificial neural network) to find a sub-optimal (near-optimal) solution to the classic traveling salesman problem, using population hotspot maps as sample data.",
                        ts)}
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
                    {card(mode, "Colorado Elevation Analysis",
                        "text3",
                        mountain)}
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
                    {card(mode, "MMA Statistic Database",
                        "text4",
                        database)}
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
                    {card(mode, "Systolic Matrix Multiplier",
                        "text5",
                        systolic)}
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
                    {card(mode, "BFS Maze Solver",
                        "text6",
                        maze)}
                </Card>
            </Box>
        </div>
    )
}

export default Page3;
