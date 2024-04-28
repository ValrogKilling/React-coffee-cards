import React from 'react'
import Card from "./Card"

import americano from "../assets/americano.jpg";
import capuccino from "../assets/cappuccino.jpg"
import coldBrew from "../assets/coldBrew.jpg"
import cortado from "../assets/cortado.jpg"
import dripCoffee from "../assets/dripCoffee.jpg"
import espresso from "../assets/espresso.jpg"
import flatWhite from "../assets/flatWhite.jpg"
import icedLatte from "../assets/icedLatte.jpg"
import latte from "../assets/latte.jpg"
import macchiato from "../assets/macchiato.jpg"
import nitroBrew from "../assets/nitroBrew.jpg"


const cards = [
    {
        id:1,
        title: "Americano",
        image: americano,
        text: "Para aquellos que quieren una bebida de café simple pero con el sabor del espresso. Hecho de 2 onzas de espresso y 4 onzas de agua caliente."
        
    },
    {
        id:2,
        title: "Capuccino",
        image: capuccino,
        text: "Para aquellos que prefieren más de la textura de la espuma de leche. Hecho de 2 onzas de espresso, 2 onzas de espuma de leche, y 2 onzas de leche al vapor."
    },
    {
        id:3,
        title: "coldBrew",
        image: coldBrew,
        text: "Café empolado en agua fría dándole una firma menos ácida y más cafeína."
    },
    {
        id:4,
        title: "cortado",
        image: cortado,
        text: "Para aquellos que quieren probar el espresso con la cantidad justa de leche. Hecho de 1 onza de espresso, 2 onzas de leche, y una fina capa de espuma en la parte superior."
    },
    {
        id:5,
        title: "dripCoffee",
        image: dripCoffee,
        text: "Para el conocedor del café."
    },
    {
        id:6,
        title: "espresso",
        image: espresso,
        text: "Para el conocedor del café."
    },
    {
        id:7,
        title: "flatWhite",
        image: flatWhite,
        text: "Para aquellos que deseaban que el latte tuviera más sabor de espresso. Hecho de 2 onzas de espresso y 4 onzas de leche de vapor."
    },
    {
        id:8,
        title: "icedLatte",
        image: icedLatte,
        text: "Las bebidas calientes de espresso pueden no ser para todos. Para todos los demás siempre hay una Latte helada."
    },
    {
        id:9,
        title: "latte",
        image: latte,
        text: "Las bebidas calientes de espresso pueden no ser para todos. Para todos los demás siempre hay un Latte helado."
    },
    {
        id:10,
        title: "macchiato",
        image: macchiato,
        text: "Para aquellos que quieran probar nuestro espresso con un látigo de crema. Hecho de 2 onzas de espresso y 1 onza de espuma de leche."
    },
    {
        id:11,
        title: "nitroBrew",
        image: nitroBrew,
        text: "Frío brebacho infundido con Nitro dándole una textura cremosa."
    }   
];

function Cards() {
    console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.image} text={card.text}/>
                    </div>
                ))
            }
            
        </div>        
    </div>
  )
}

export default Cards