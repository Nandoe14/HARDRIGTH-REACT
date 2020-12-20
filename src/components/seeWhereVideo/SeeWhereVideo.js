import React, { useEffect, useState } from 'react'
import playVideo from './../../assets/Group_4.svg'
import closeVideo from './../../assets/close_icon.png'
import { Footer } from '../footer/Footer'

export const SeeWhereVideo = () => {

    const [state, setState] = useState(false)

    const handleClickToggleVideo = () => {
        setState(!state)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <section className="seewherevideo">
                <h2>See where you stand</h2>
                <p className="p2 container2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <div className="videosw">
                    <img
                        src={playVideo}
                        alt="Video"
                        onClick={handleClickToggleVideo}
                    />
                </div>
                {
                    (state)
                    &&
                    (<div className="videout" onClick={handleClickToggleVideo}>
                        <div>
                            <div className="contdivvideo">
                                <img src={closeVideo} alt="X" />
                                <iframe className="animate__animated animate__backInDown" id="videoiframe" src="https://www.youtube.com/embed/8Akb1t37T4E?rel=0&amp;autoplay=1&amp;start=130" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Video"></iframe>
                            </div>
                        </div>
                    </div>)
                }
            </section>
            <Footer />
        </>
    )
}
