import React from 'react'
import { Button } from '../buttons/Button'
import { FooterTableList } from './FooterTableList'
import logoFooter from '../../assets/Group_12.svg'
import facebookIcon from '../../assets/Facebook.svg'
import twitterIcon from '../../assets/twitter.svg'
import youtubeIcon from '../../assets/Youtube.svg'
import pinteresIcon from '../../assets/Pinteres.svg'
import linkedinIcon from '../../assets/In.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'

export const Footer = () => {

    const cantListArray = [0, 1, 2, 3, 4]

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <footer>
            <div className="container1">
                <hr />
                <div className="cont-table-auth">
                    <div className="footer-table">
                        {
                            cantListArray.map(und =>
                                <FooterTableList key={und} i={und} />)
                        }
                    </div>
                    <div className="footer-auth">
                        <div>
                            <Link
                                className="link-login"
                                to="/auth/login"
                            ><span className="login">Login</span></Link>

                            <Link
                                to="/auth/register"
                            ><Button id="footer-button" content="get started" /></Link>
                        </div>
                    </div>
                </div>

                <img className="logoi" src={logoFooter} alt="Logo" />

                <div className="foot">
                    <div className="legals-cont">
                        <div>
                            <span><a href="#a">HardRigth.io, Inc.</a></span>
                            <span><a href="#a">Terms</a></span>
                            <Link
                                className="link-login"
                                to="/auth/login"
                                onClick={handleLogout}
                            ><span className="logout">Logout</span></Link>
                        </div>
                    </div>
                    <div className="social-cont">
                        <div>
                            <div className="social">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter" /></a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="Youtube" /></a>
                                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer"><img src={pinteresIcon} alt="Pinteres" /></a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="Linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
