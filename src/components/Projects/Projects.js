import {FaReact} from "react-icons/fa"
import {SiCss3,SiHtml5} from "react-icons/si"
import {TbApi} from "react-icons/tb"
import {IoLogoJavascript} from "react-icons/io"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>

{/* <-------------------------------------------------1 start-------------------------------------------> */}

    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src="https://media.discordapp.net/attachments/702481980025077853/1034460531043614800/unknown.png?width=1363&height=675" alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034490981522878554/unknown.png?width=1440&height=658" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034491057368477906/unknown.png?width=1440&height=657" alt="Image 2"/>
           </SplideSlide>

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">Movie App</h3>

        <p className='project__description'>
          In the Movie App, you can search for any movie with all its details such as rating, release date, actors etc.
        </p>

   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <SiHtml5 size={40} />
             <IoLogoJavascript size={40} />
            <SiCss3 size={40}/>
            <TbApi size={50}/>
          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://fantastic-seahorse-6456d7.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/masai-course/rishukumar_fw20_0888/tree/master/unit-3/evaluation/Movies%20App" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div>

{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src="https://media.discordapp.net/attachments/702481980025077853/1034502096214573056/unknown.png?width=1375&height=676" alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034502234035191838/unknown.png?width=1373&height=676" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034502334878851162/unknown.png?width=1375&height=676" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034502449890856960/unknown.png?width=1375&height=676" alt="Image 2"/>
           </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Bella Vita Organic Clone</h3>

  <p className='project__description'>
  Bella Vita Organic is an Ecommerce Website for natural products for beauty, skincare, and perfumes.A collaborative project team leader built by a team of 3 executed in 5 days. 
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://gorgeous-taiyaki-33aee8.netlify.app/index.html"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/rishunayak/sore-rate-9569"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}



{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src="https://media.discordapp.net/attachments/702481980025077853/1034508981898580058/unknown.png?width=1373&height=676" alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034509092573691914/unknown.png?width=1369&height=676" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034509195871002674/unknown.png?width=1375&height=676" alt="Image 2"/>
           </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">Deccan Herald Clone</h3>

  <p className='project__description'>
   Deccan Herald is an Indian English language daily newspaper published from the Indian state of Karnataka. Solo project executed in 5 days.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://decisive-iron-5903.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/rishunayak/decisive-iron-5903"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}



    </section>
  )
}

export default Projects
