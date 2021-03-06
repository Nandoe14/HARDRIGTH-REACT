import React, { useEffect, useState } from 'react'
import { useFormWithFilter } from '../../hooks/useFormWithFilter';
import { Footer } from '../footer/Footer';
import house from './../../assets/home.svg';
import row from './../../assets/row.svg';
import search from './../../assets/search_icon.svg';
import { IndustryElement } from './IndustryElement';
import { InputIndustry } from './InputIndustry';

export const SeeWhere = () => {

    const industries = [
        'Education',
        'Energy',
        'Entertainment & Gaming',
        'Financial Services',
        'Government & Non-profit',
        'Healthcare'
    ]

    const [state, setState] = useState({
        select: 'Select',
        showed: false,
        itemShowed: true
    })

    const [{ isearch }, handleInputChange, reset] = useFormWithFilter({
        isearch: '',
        contIndustry: 6
    })

    const { select, showed } = state

    const visualChanges = () => {
        document.querySelector('.select-plegable').classList.toggle("show-select")
        document.querySelector('#rowselect').classList.toggle("row-rotate-select")
        document.querySelector('.industry-select').classList.toggle("border-select")
        document.querySelector('.select-plegable').removeAttribute("style")
    }

    const handleClickIndustry = () => {
        visualChanges()
        setState({
            ...state,
            showed: !showed
        })
        reset()
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <section className="seewhere">
                <div className="container2">
                    <h2>See where you stand</h2>
                    <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing</p>

                    <div className="industry-select">
                        <span>industry</span>
                        <div className="divhouse">
                            <img className="animate__animated animate__tada" src={house} alt="" />
                        </div>
                        <div className="divselect" onClick={handleClickIndustry}>
                            <span>{select}</span>
                        </div>
                        <div className="divrow" onClick={handleClickIndustry}>
                            <img id="rowselect" src={row} alt="row" />
                        </div>
                        <div className="select-plegable">
                            <div className="selectlist">
                                <div>
                                    <InputIndustry
                                        isearch={isearch}
                                        handleInputChange={handleInputChange}
                                    />
                                    <img src={search} alt="search" />
                                </div>
                            </div>
                            {
                                industries.map(ind =>
                                    (<IndustryElement
                                        key={ind}
                                        industry={ind}
                                        state={state}
                                        setState={setState}
                                        visualChanges={visualChanges}
                                    />)
                                )
                            }
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
