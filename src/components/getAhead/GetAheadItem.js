import React from 'react';
import tickets from './../../assets/Icon_TICKETS.svg';
import customers from './../../assets/Icon_CUSTOMERS.svg';
import agents from './../../assets/icon_AGENTS.svg';
import customers2 from './../../assets/icon_CUSTOMERS2.svg';

export const GetAheadItem = ({ i }) => {

    const imgsArray = [tickets, customers, agents, customers2]
    const numArray = [200, '320M', '320M', 320]
    const classArray = ['tickets', 'customers', 'agents', 'customers']

    const handleClick = (id) => {
        const unitElement = document.querySelector(id)
        unitElement.classList.add("animate__animated")
        unitElement.classList.add("animate__hinge")
    }

    return (
        <div id={`unit${i}`} className="unit" onClick={() => handleClick(`#unit${i}`)}>
            <div className="cell">
                <div className="cell-img">
                    <img src={imgsArray[i]} alt="Tickets" />
                </div>
                <div className="cell-info">
                    <span>{numArray[i]}</span>
                    <span>{classArray[i]}</span>
                </div>
            </div>
            <div className={`under-${i}`}></div>
        </div >
    )
}
