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
import bb from './pictures/brewbuddy.png';
import pso from './pictures/particle_swarm.gif';
import maz from './pictures/maz.png';
import sdk from './pictures/sudoku.gif';
import rw from './pictures/rwanda.gif';
import ch from './pictures/chess-bot.gif';
import fydp from './pictures/fydp.jpg';


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
                            fydp)}
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
                            rw)}
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
                            ch)}
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
                            "An elitist Genetic Algorithm with adaptive mutation, single-point crossover, and tournament selection. Solves for obvious squares first to minimize the search space, then converges in as few as 10 generations.",
                            sdk)}
                    </Card>
                    <Card className="card9"
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
                        {card(mode, "Particle Swarm Simulator",
                            "A Particle Swarm Optimization (PSO) that mimics the social behavior of bird flocking and fish schooling to minimize a 3-dimensional sphere function. Uses star topology and random initialization.",
                            pso)}
                    </Card>
                    <Card className="card10"
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
                        {card(mode, "Elevation Grid Path Finder",
                            "A visualization of aggregated elevation data (Colorado mountain range shown) that iterates multiple greedy algorithms to find several optimal routes based on workload or altitude preferences.",
                            mountain)}
                    </Card>
                    <Card className="card11"
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
                        {card(mode, "Mini Real-Time Operating System (RTOS)",
                            "A Real-Time Executive written mostly in C and ARM, run on the DE1-SoC FPGA. It contains several multithreaded elements, including I/O, dynamic memory, task scheduling, and inter-task communication.",
                            de1)}
                    </Card>
                    <Card className="card12"
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
                            "A 2D systolic array that can perform matrix multiplication of NxN input streams, injected into a processing element on a PYNQ FPGA. Runs an embedded Linux stack and ships with Python APIs.",
                            systolic)}
                    </Card>
                    <Card className="card13"
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
                        {card(mode, "BrewBuddy Android App",
                            "A Kotlin/Java Android app with a Firebase DB to share and discover recipes for coffee and other beverages, including a store locator, recipe recommendation algorithm, a marketplace, and an upload/sharing feature.",
                            bb)}
                    </Card>
                    <Card className="card14"
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
                        {card(mode, "Maze Multi-Solver",
                            "A goal-based agent that parses and displays multicursal mazes of varying size, and animates the search process of the following methods: BFS, DFS, A*, Greedy, and IDDFS.",
                            maz)}
                    </Card>
                    <Card className="card15"
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
                            "A searchable, sortable, and editable database, modeled with NoSQL properties and written in C, made to store career statistics of MMA finalists.",
                            database)}
                    </Card>
                </Box>
            </div>
        </div>
    )
}

export default Page3;
