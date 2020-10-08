import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import house from './../../assets/home.svg';
import row from './../../assets/row.svg';
import search from './../../assets/search_icon.svg';
import { IndustryElement } from './IndustryElement';

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
        showed: false
    })

    const [{ isearch }, handleInputChange] = useForm({
        isearch: ''
    })

    const { select, showed } = state

    const visualChanges = () => {
        document.querySelector('.select-plegable').classList.toggle("show-select")
        document.querySelector('#rowselect').classList.toggle("row-rotate-select")
        document.querySelector('.industry-select').classList.toggle("border-select")
    }

    const handleClickIndustry = () => {
        visualChanges()
        setState({
            ...state,
            showed: !showed
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="seewhere">
            <div className="container2">
                <h2>See where you stand</h2>
                <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <span>industry</span>

                <div className="industry-select">
                    <div className="divhouse">
                        <img src={house} alt="" />
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
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="isearch"
                                        placeholder="Search"
                                        value={isearch}
                                        onChange={handleInputChange}
                                    />
                                </form>
                                <img src={search} alt="search" />
                            </div>
                        </div>
                        {
                            industries.map(ind =>
                                (<IndustryElement
                                    key={ind}
                                    industry={ind}
                                    setState={setState}
                                    visualChanges={visualChanges}
                                />)
                            )
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
