import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import iRow from '../../assets/pass_i.svg'
import dRow from '../../assets/pass_d.svg'
import { SliderCard } from './SliderCard'

export const Slider = () => {

    const cantCards = [0, 1, 2]

    const { counter, increment, decrement, reset, reset2 } = useCounter(0)

    const handleClick = (val) => {

        const cards = document.querySelectorAll(".card-slider")

        if (val) {
            increment(1)
        } else {
            decrement(1)
        }
        switch (counter) {
            case 0:
                cards[0].classList.toggle("slide-selected")
                if (!val) {
                    cards[2].classList.toggle("slide-selected")
                    reset2()
                } else {
                    cards[counter + 1].classList.toggle("slide-selected")
                }
                break;
            case 1:
                cards[counter].classList.toggle("slide-selected")
                if (val) {
                    cards[counter + 1].classList.toggle("slide-selected")
                } else {
                    cards[counter - 1].classList.toggle("slide-selected")
                }
                break;
            case 2:
                cards[2].classList.toggle("slide-selected")
                if (val) {
                    cards[0].classList.toggle("slide-selected")
                    reset()
                } else {
                    cards[counter - 1].classList.toggle("slide-selected")
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="slide">
                <div className="cont">
                    {
                        cantCards.map((unit) =>
                            <SliderCard key={unit} i={unit} />
                        )
                    }
                </div>
            </div>

            <div className="pass">
                <img className="btnld" src={iRow} alt="<" onClick={() => handleClick(false)} />
                <img className="btnrd" src={dRow} alt=">" onClick={() => handleClick(true)} />
            </div>
        </>
    )
}
