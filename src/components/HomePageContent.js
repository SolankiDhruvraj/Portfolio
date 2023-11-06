import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/HomePageContent.css';
// import computer from '../Images/computer.png'
const HomePageContent = () => {
    return (
        <div className="main">
            <div className="bgImgcontainer">
                <img src="https://cdn.vectorstock.com/i/1000x1000/48/89/network-background-on-white-vector-37604889.webp" alt="BackgroundImage" className="bgImg" />
            </div>
            <div className="mainContent">
                <div className="textContainer">
                    <div className='head'>Hi There</div>
                    <div className='head'>I'm Dhruvraj <span className='surnname'>Solanki</span> </div>
                    <div className='head1'>I am into Development</div>
                    <div className="btns">
                        <Link to="/project"><button className='projectBtn'>Projects</button></Link>
                        <Link to="contact"><button className='contactBtn'>Contact</button></Link>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2022/06/01/16/26/software-7236161_960_720.png" alt="" srcset="" className='heroImg' />
                </div>
            </div>
        </div>
    )
}

export default HomePageContent