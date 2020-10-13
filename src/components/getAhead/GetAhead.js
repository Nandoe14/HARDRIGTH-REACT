import React from 'react'
import imgWoman from '../../assets/room-GkWrEPTyDRs-unsplash.png';
import { GetAheadItem } from './GetAheadItem';
import { Footer } from '../footer/Footer';

export const GetAhead = () => {

    const cantCells = [0, 1, 2, 3]

    return (
        <>
            <section className="getahead">
                <img src={imgWoman} alt="imgWoman" />
                <div className="gacont">
                    <h2>Get ahead of the curve</h2>
                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                </div>

                <div className="gadata container1">
                    <h4>Based on data from:</h4>
                    <div className="cells container1">

                        {
                            cantCells.map((unit) =>
                                <GetAheadItem key={unit} i={unit} />
                            )
                        }

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
