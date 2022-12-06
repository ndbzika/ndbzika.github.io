import React from 'react';

const Carrosel = () => {
    return (  
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://tatakaedev.com.br/posts/como-criar-uma-calculadora-em-javascript/images/kalculator-final.png" class="d-block w-100" alt="Calculadora"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Calculadora</h5>
                        <p>Calculadora feita com HTML5, CSS3 e JavaScript</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="https://www.devjuniorplus.com.br/static/d4bbac18d54f3326366b5449eb625309/eef63/todolist.png" class="d-block w-100" alt="To do list"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>To-do-list</h5>
                    <p>To do list simples feita com ReactJs, também disponível com JavaScript</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://i.ibb.co/6Z4SSq2/loopis-food.png" class="d-block w-100" alt="Loopis Food"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Projeto Loopis Food</h5>
                    <p>Site de cadastro de comidas, feito com intuito de participar do processo seletivo da LoopisJr</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    );
}

export default Carrosel;