import React from 'react'
import cuadrado from '../../assets/Group.svg'
import triangulo from '../../assets/Group_6.svg'
import circulo from '../../assets/Group_7.svg'

export const SliderCard = ({ i }) => {

    const titleCardArray = ['Learn from our research', 'Learn from our research', 'Learn from our research']
    const contentCardArray = ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor']
    const imageCardArray = [cuadrado, triangulo, circulo]
    const footerCardArray = ['Read report', 'Read report', 'Read report']

    return (
        <div className={`card-slider animate__animated show-none-card ${(i === 0) && 'slide-selected show-block-card'} ${((i === 0) && (window.innerWidth <= 768)) && 'animate__bounceIn'}`}>
            <h3>{titleCardArray[i]}</h3>
            <span>{contentCardArray[i]}</span>
            <div className="img">
                <img src={imageCardArray[i]} alt="Cuadrado" />
            </div>
            <span>{footerCardArray[i]}</span>
        </div>
    )
}
