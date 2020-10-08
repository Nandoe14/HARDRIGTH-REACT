import React from 'react';
import tickets from './../../assets/Icon_TICKETS.svg';
import customers from './../../assets/Icon_CUSTOMERS.svg';
import agents from './../../assets/icon_AGENTS.svg';
import customers2 from './../../assets/icon_CUSTOMERS2.svg';

export const GetAheadItem = ({ i }) => {

    const imgsArray = [tickets, customers, agents, customers2]
    const numArray = [200, '320M', '320M', 320]
    const classArray = ['tickets', 'customers', 'agents', 'customers']

    return (
        <div className="unit">
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
