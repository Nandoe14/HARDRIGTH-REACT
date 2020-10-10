import React from 'react'
// import logo1 from './../../assets/logo.svg'
// import logo2 from './../../assets/Logo_Fixed_Header.svg'

export const NavBar = () => {

    // const [state, setState] = useState(true)

    // const visualChanges = () => {
    //     const itemLinkNavBar = document.querySelectorAll(".link-nav-bar")
    //     document.querySelectorAll(".navbar")[0].classList.toggle("changes-nav-bar")
    //     for (let j = 0; j < itemLinkNavBar.length; j++) {
    //         itemLinkNavBar[j].classList.toggle("changes-text-nav-bar")
    //     }
    // }

    // const handleEvent = () => {
    //     console.log(window.scrollY)
    //     if (window.scrollY !== 0 && !state) {
    //         setState(true)
    //         visualChanges()
    //         console.log('>0')
    //         console.log(state)
    //     }
    //     if (window.scrollY === 0) {
    //         setState(false)
    //         visualChanges()
    //         console.log('===0')
    //         console.log(state)
    //     }
    // }
    // console.log('Estado', state)

    // window.addEventListener('scroll', handleEvent)

    return (
        <section className="navbar">
            <div className="container1">
                {/* {
                    (state)
                        ?
                        (<img src={logo1} alt="HARDRIGTH" />)
                        :
                        (<img src={logo2} alt="HARDRIGTH" />)
                } */}
                <nav>
                    <ul>
                        <li><a className="link-nav-bar" href="#home">products</a></li>
                        <li><a className="link-nav-bar" href="#get-ahead">pricing</a></li>
                        <li><a className="link-nav-bar" href="#learn-from">solutions</a></li>
                        <li><a className="link-nav-bar" href="#video">demo</a></li>
                        <li><a className="link-nav-bar" href="#see-where">services</a></li>
                        <li><button>get started</button></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

