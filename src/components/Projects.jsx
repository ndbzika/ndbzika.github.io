import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ProjectsSection = () => {
    return (  
        <>
            <Card sx={{maxWidth:300}} className='calculator-container'>
                <a href="https://github.com/ndbzika/calculadora-react"  target='_blank' rel="noreferrer" style={{textDecoration:'none', color:'black'}}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='100'
                            image='https://thumbs2.imgbox.com/9b/50/N1LIvx0k_t.png'
                            alt='calculadora'
                    
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                Calculadora
                            </Typography>
                            <Typography>
                                Calculadora simples feita com ReactJs para estudo e aprendizado da biblioteca/framework.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

            <Card sx={{maxWidth:300}} className='product-hunt-container'>
                <a href="https://github.com/ndbzika/product-hunt-clone"  target='_blank' rel="noreferrer" style={{textDecoration:'none', color:'black'}}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='100'
                            image='https://thumbs2.imgbox.com/29/df/3sx7rrbO_t.png'
                            alt='calculadora'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                Product Hunt (Clone)
                            </Typography>
                            <Typography>
                                Clone do site <a href="https://www.producthunt.com/">Product Hunt</a>, ainda em desenvolvimento. Feito para familiariza????o da biblioteca/framework ReactJs.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

            <Card sx={{maxWidth:300}} className='calculator-container'>
                <a href="https://ndbzika.github.io/desafio-loopis/"  target='_blank' rel="noreferrer" style={{textDecoration:'none', color:'black'}}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='100'
                            image='https://thumbs2.imgbox.com/47/d6/90fwwAwJ_t.png'
                            alt='calculadora'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                Loopis Food
                            </Typography>
                            <Typography>
                                Site de cadastro de alimentos com local storage. Feito para o processo seletivo da empresa <a href="https://loopisjr.com.br/">Loopis Jr</a>.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>
        </>
    );
}

export default ProjectsSection;