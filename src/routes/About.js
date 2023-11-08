import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/About.css';
// import resume from '../DhruvrajResume.pdf';
import NavBar from '../components/NavBar';
const About = () => {
  return (
    <div className="outerContainer">
      <div><NavBar /></div>
      <div className="bgImgcontainer2">
        <img src="https://media.istockphoto.com/id/1170919626/photo/closeup-elegant-crumpled-of-white-silk-fabric-cloth-background-and-texture-luxury-background.jpg?b=1&s=170667a&w=0&k=20&c=mBuI8_IEEloem3oWDr0Q0VG255vewRrKoa1F8BWuLW4=" alt="BackgroundImage" className="bgImg2" />
      </div>
      <div className="centerContainer">
        <div className="skillExperience">
          <div className="skillContainer">
            <div className="skills">
              <h2>Skills</h2>
            </div>
            <div className="html">
              <div>
                HTML - 90%
              </div>

            </div>
            <div className="css">
              <div>
                CSS - 80%
              </div>
            </div>
            <div className="javascript">
              <div>
                Javascript - 75%
              </div>
            </div>
            <div className="reactJs">
              <div>
                ReactJs - 75%
              </div>
            </div>
            <div className="python">
              <div>
                Python - 90%
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <h1>
            Work Experience
          </h1>
          <h3>
            Internship
          </h3>
          <p>React Native Developer Intern @Campaa</p>
          <p>AWS Academy Virtual Internship</p>
        </div>
        <div className="codingProfile">
          <h2>Coding Profile</h2>
          <div><a href='https://www.codechef.com/users/dhruvraj_747' target="_blank">Codechef</a></div>
          <div><a href='https://codeforces.com/profile/Dhruvraj_Solanki' target="_blank">Codeforces</a></div>
          <div><a href='https://www.hackerrank.com/E38_Dhruvraj' target="_blank">Hackerrank</a></div>
          <div><a href='https://leetcode.com/dhruvraj_747/' target="_blank">Leetcode</a></div>
        </div>
        {/* <div className="resumeDownload"> */}
          {/* <h2>Click here to Download Resume</h2> */}
          {/* <a className='resumeBtn' href={resume} target="_blank">Download Resume</a> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default About