
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
  import { ThemeContext } from '../../contexts/theme';
  import { useContext } from 'react';
  import { useState } from 'react';
  import { useEffect } from 'react';
import {BiStar} from "react-icons/bi"

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import './About.css'



function About  () {
  

  const [{ themeName }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themeName === "light" ? "#23283e" : "#fcfcfc"
  );

 useEffect(() => {
    if (themeName === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themeName]);
 

  return (
     
    <div className='about center' id='about'>
      
      <h2>ABOUT <span className='about__name'> ME</span></h2>     
   
    
    
      <div className='about__contact' >

                 
                 <div>
        
                   <img src='https://avatars.githubusercontent.com/u/57229844?v=4' alt='rishu' id='profile'/>
    
                 </div>

                <div>
                    <h4 className='about__desc'>
                      Hi Everyone, I am Rishu Kumar Nayak from Maharajganj, Uttar Pradesh.
                      I have completed my graduation in Bachelor of Computer Application from Babu Banarasi Das University, Lucknow.
                    </h4>
                    <br/>
                  <div id='interest' >
                   <h4 className='about__desc'> Some of my interests apart form Coding :</h4>
               
                   <BiStar className='about__name'/> <span className='about__name'> Listing Music</span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'> Playing Badminton </span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'> Watching Cricket</span>
                   <br/>
                    <BiStar className='about__name' /> <span className='about__name'>Watching Movies</span>
                    </div>
                </div>
                 
          </div>     
                  

           
            
               
                
      <h2 id='timeline'>MY <span className='about__name'>EDUCATION</span> </h2>

     
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement date='May 2021 - December 2021'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School (Remote)
            </h4>
            <p data-aos="fade-right">
              Joined the Military style Bootcamp to learn Full Stack Web Development
              and Data Structures. Also learned many soft skills in the process.
            </p>

        </VerticalTimelineElement>


        <VerticalTimelineElement date='June 2018 - June 2021'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
    
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Bachelor of Computer Application (BCA)
            </h4>
            <p data-aos="fade-right">
               Babu Banarasi Das University, Lucknow
            </p>

        </VerticalTimelineElement>


        <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>

      </VerticalTimeline>
              
           

    

    
    </div>
  )
}

export default About
