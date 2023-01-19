import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, {useEffect, useState, useRef} from 'react';
import {motion} from 'framer-motion'


const ProjectsSection = () => {
    const [repositories, setRepositories] = useState([])
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current?.scrollWidth , carousel.current?.offsetWidth);
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    useEffect(() => {
        fetch('https://api.github.com/users/ndbzika/repos')
        .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])
    return (  
        <>
            
            <motion.div ref={carousel} style={{cursor:'grab', overflow:'hidden'}} whileTap={{cursor:'grabbing'}}>
                <motion.div style={{display: 'flex', gap:10}} drag='x' dragConstraints={{right:0, left: -width}}>
                    { repositories.map(repository => {
                        return(
                                    <Card sx={{minWidth:350, maxHeight:300}} key={repository.keys_url}>
                                        <a href={repository.html_url}  target='_blank' rel="noreferrer" style={{textDecoration:'none', color:'black'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component='img'
                                                    height='100'
                                                    image={repository.owner.avatar_url}
                                                    alt='calculadora'
                                            
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant='h5' component='div'>
                                                        {repository.name}
                                                    </Typography>
                                                    <Typography>
                                                        {repository.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </a>
                                    </Card>
                        )
                        })
                    
                    }
                </motion.div>
            </motion.div>
            
        </>
    );
}

export default ProjectsSection;