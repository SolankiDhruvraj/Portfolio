import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/footer.css';
const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerLeft">
                <div className="mail iconLeft">
                    <FaMailBulk size={20} color="rgb(9, 14, 77)" className='icons'/><span> dhruvrajsolanki37@gmail.com</span>
                </div>

            </div>
            <div className="footerRight">
                <div className="linkedin iconRight">
                    <FaLinkedin size={20} color="rgb(9, 14, 77)" className='icons' /><a href="https://www.linkedin.com/in/dhruvraj-solanki-39b763205/">https://www.linkedin.com/in/dhruvraj-solanki-39b763205/</a>
                </div>
                <div className="github iconRight">
                    <FaGithub size={20} color="rgb(9, 14, 77)" className='icons' /> <a href="https://github.com/SolankiDhruvraj">https://github.com/SolankiDhruvraj</a>
                </div>
            </div>
        </div>
    )
}

export default Footer