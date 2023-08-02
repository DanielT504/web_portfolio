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
        <div
        className="pageThree"
            style={{
            backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
            color: mode === 'light' ? "#121212" : "#ffffff"
        }}>
            <div className="border3"
            style={{
                border: mode === 'dark' ? '1px solid white' : '1px solid black',
            }}>
                <div style={{height: '100px'}}/>
                <div id="pg3" style={{height: '40px'}}/>
                <Typography sx={{zIndex: '4', left: '0', right: '0', marginTop: '0', marginLeft: 'auto', marginRight: 'auto', fontSize: 40, mb: 2, textAlign: "center", fontFamily: 'NunitoSans'}} color={mode === "dark" ? "white" : "black"}>
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
                        {card(mode, "Deep-Learning Classifier for Insulator Defects",
                            "A Convolutional Neural Network (CNN) using a pretrained model to classify preprocessed images of wet polymer insulators, predicting their age based on remaining surface hydrophobicity (size of water droplets).",
                            de1)}
                    </Card>
                    <Card className="card6"
                    sx={{
                        width: '320px',
                        minHeight: '257px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "Traveling Salesman Neural Network",
                            "A Python Artificial Neural Network (ANN) that uses a Self-Organizing Map (SOM) to find a near-optimal solution to the classic traveling salesman problem. Supports populations of up to ~90,000 neurons.",
                            ts)}
                    </Card>
                    <Card className="card7"
                    sx={{
                        width: '320px',
                        minHeight: '222px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "Intelligent Chess Engine",
                            "An artificially intelligent chess agent that was built with an alpha-beta pruned minimax tree. Uses heuristic board evaluation (feasible up to a depth of 5-6) based on positional and structural incentives, capture potential, piece mobility, and material balance.",
                            mountain)}
                    </Card>
                    <Card className="card8"
                    sx={{
                        width: '320px',
                        minHeight: '218px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "Genetic Sudoku Solver",
                            "An elitist Genetic Algorithm with adaptive mutation, single-point crossover, and tournament selection. Can solve most easy and medium level Sudokus in a short time, higher difficulty may lead it to local optima for several iterations before solving.",
                            database)}
                    </Card>
                    <Card className="card8"
                    sx={{
                        width: '320px',
                        minHeight: '218px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "particle",
                            "This 2D systolic array can perform matrix multiplication of NxN input streams, injected into a processing element on a PYNQ FPGA, that runs an embedded Linux stack and ships with Python APIs.",
                            systolic)}
                    </Card>
                    <Card className="card7"
                    sx={{
                        width: '320px',
                        minHeight: '222px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "Colorado Elevation Analysis",
                            "This C++ program can aggregate and visualize elevation data (eg. these Colorado mountains), and iterates multiple least-work (greedy) algorithms to yield several optimal paths based on workload preferences.",
                            mountain)}
                    </Card>
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
                            "This RTX is run on the DE1-SoC FPGA and is comprised of several multithreaded elements of a real-time operating system, written mostly in C and ARM. It includes dynamic memory and task management, inter-task communication, and I/O.",
                            de1)}
                    </Card>
                    <Card className="card8"
                    sx={{
                        width: '320px',
                        minHeight: '218px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "Systolic Matrix Multiplier",
                            "This 2D systolic array can perform matrix multiplication of NxN input streams, injected into a processing element on a PYNQ FPGA, that runs an embedded Linux stack and ships with Python APIs.",
                            systolic)}
                    </Card>
                    <Card className="card8"
                    sx={{
                        width: '320px',
                        minHeight: '218px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "BFS Maze Solver",
                            "This breadth-first search algorithm was made in accompaniment with a DFS (depth-first search) maze solver, both of which can parse and display multicursal mazes of varying size, and animate the process of solution.",
                            maze)}
                    </Card>
                    <Card className="card8"
                    sx={{
                        width: '320px',
                        minHeight: '218px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "Brewbuddy",
                            "This breadth-first search algorithm was made in accompaniment with a DFS (depth-first search) maze solver, both of which can parse and display multicursal mazes of varying size, and animate the process of solution.",
                            maze)}
                    </Card>
                    <Card className="card8"
                    sx={{
                        width: '320px',
                        minHeight: '218px',
                        zIndex: 3,
                        backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
                        borderColor: mode === 'dark' ? "#ffffff" : "#121212",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                    }}    
                    variant="outlined">
                        {card(mode, "NoSQL UFC Database",
                            "This is a searchable, sortable, and editable database, modeled with NoSQL properties and written in C, made to store career statistics of MMA finalists.",
                            database)}
                    </Card>
                </Box>
            </div>
        </div>
    )
}

export default Page3;
