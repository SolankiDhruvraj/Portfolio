import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className="mainContainer">
      <div className="nav">
        <NavBar />
      </div>
      {/* <div className="bgImgcontainer3">
        <img src="https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=360" alt="BackgroundImage" className="bgImg3" />
      </div> */}
      <div className="mainForm">
        <div className='formContainer'>
          <div className="contactInfo">
            <div>Contact Info</div>
          </div>
          <div className="formInnerContainer">
            <form action="https://getform.io/f/7a4a0771-434f-410f-9952-5d874a9108b3" method='POST'>
              <input type=" text" placeholder='Name' name="name" />
              <input type=" text" placeholder='Email' name="email" />
              <input type=" text" placeholder='Subject' name="subject" />
              <textarea type="text" placeholder='Message' name="message" />
              <button type="submit" className="formSubmitBtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact