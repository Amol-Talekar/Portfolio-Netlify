import { Box,Button } from '@material-ui/core';
import React from 'react';
import styles from "./Home.module.css";
import { makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { Wave } from 'react-animated-text';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const useStyles = makeStyles({
    techBox: {
     margin:"1vw",
     padding:"2vw",
     justifyContent:"center",
     marginTop:"10vh"
    },
    individualTechBox:{
        padding:"10px",
        justifyContent:"center",
        textAlign:"center",
        backgroundColor:"rgb(250, 249, 249)"
    },
    projectBox:{
        margin:"1vw",
        padding:"1vw",
        justifyContent:"center",
        marginTop:"8vh"
    },
    individualProjectBox:{
        margin:"1vw",
        padding:"1vw",
        backgroundColor:"rgb(250, 249, 249)",
        marginBottom:"4vh",
        marginTop:"6vh"
    },
    contactBox:{
        margin:"1vw",
        padding:"1vw",
        marginBottom:"5vh",
        marginTop:"3vh",
        backgroundColor:"rgb(250, 249, 249)"
    },
    resumeButton:{
        height:"5vh",
        marginTop:"0.5vh",
        fontSize:"1.7vw",
        fontWeight:"bolder",
        borderRadius:"10px",
        backgroundColor:"white"
       
    }
  });

const Home = () => {
    const classes = useStyles();
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `AmolTalekarResume.pdf`;
        link.href = "AmolTalekarResume.pdf";
        link.click();
      };


   
    return (
        <Box boxShadow={3} >
           
        <div className={styles.mainHomeDiv}>
            <div className={styles.aboutFirstGrid} id="about">
                <div>
                    <img className={styles.profileImgClass} alt="Amol Talekar" src="/AmolTalekar.jpg"/>
                </div>
               
               <div>
                <h1 className={styles.abouth1Class}><span  ><Wave  text="Hi there, I am  Amol Talekar," ></Wave></span>   it is very nice to meet you!</h1>
                <h2 className={styles.abouth2Class}>I am a passionate aspiring Full Stack Developer skilled in MERN stack, molded and shaped by Masai school’s intensive and disciplined teaching. Looking forward to joining a company where I will be able to contribute towards individual and company growth.</h2>
           
               </div>
            </div>

            <Box  className={classes.techBox} boxShadow={3}>
            <h1 className={styles.headingAlignClass}>Skills</h1>
            <div className={styles.techGrid} id="tech">
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="React" src="/reactlogo.png" />
                      <p className={styles.techParaClass}>React</p>
                  </Box> 
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="JavaScript" src="/jslogo.png" />
                      <p className={styles.techParaClass}>JavaScript</p>
                  </Box>
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="Redux" src="/reduxlogo.png" />
                      <p className={styles.techParaClass}>Redux</p>
                  </Box >  
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="HTML" src="/htmllogo.png" />
                      <p className={styles.techParaClass}>HTML5</p>
                  </Box> 
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="CSS" src="/csslogo.png" />
                      <p className={styles.techParaClass}>CSS3</p>
                  </Box>
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="Material" src="/materiallogo.svg" />
                      <p className={styles.techParaClass}>Material UI</p>
                  </Box> 
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="Node" src="/nodelogo.png" />
                      <p className={styles.techParaClass}>Node JS</p>
                  </Box>
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="Express" src="/expresslogo.png" />
                      <p className={styles.techParaClass}>Express JS</p>
                  </Box>
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="MongoDB" src="/mongologo.png" />
                      <p className={styles.techParaClass}>MongoDB</p>
                  </Box>
                  
                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="AWS" src="/awslogo.png" />
                      <p className={styles.techParaClass}>AWS</p>
                  </Box>

                  <Box className={classes.individualTechBox} boxShadow={3}>
                      <img className={styles.techImgClass} alt="GIT" src="/gitlogo.png" />
                      <p className={styles.techParaClass}>GIT</p>
                  </Box>
                  
            </div>
            </Box>
            
            
            <Box id="projects" className={classes.projectBox} boxShadow={3}>
                <h1 className={styles.headingAlignClass} >My Projects</h1>
                <Box data-aos="flip-left" className={classes.individualProjectBox} boxShadow={3}>
                    <Link to="/#" className={styles.externalLinksClass} onClick={()=>window.open("https://github.com/Amol-Talekar/travelocity","_blank")} > <span className={styles.externalLinkSpan}>travelocity.com</span> </Link>
                    <img className={styles.projectImgClass} alt="travelocity" src="/travelocitylogo.png" />
                    <p className={styles.projectParaClass}>travelocity.com is a website that caters to all travel needs of travelers. </p>
                    <p className={styles.projectParaClass}>Tech Stack : HTML, CSS3 and Advanced JavaScript </p>
                    <div className={styles.projectButtonDivClass}>
                        <button onClick={()=>window.open("https://github.com/Amol-Talekar/travelocity","_blank")}  className={styles.projectButtonClass}>Visit Github</button>
                        <button onClick={()=>window.open("https://drive.google.com/file/d/1I90WKSrjCl6g-uhEYBWewLubugQgJivw/view?usp=sharing","_blank")} className={styles.projectButtonClass}>Visit Demo</button>
                    </div>
                </Box>
                
                <Box data-aos="flip-right" className={classes.individualProjectBox} boxShadow={3}> 
                <Link to="/#" className={styles.externalLinksClass} onClick={()=>window.open("https://github.com/Amol-Talekar/unbounce","_blank")} >unbounce.com</Link>
                    <img className={styles.projectImgClass} alt="unbounce" src="/unbouncelogo.png" />
                    <p className={styles.projectParaClass}>unbounce.com, a website that specializes in creating custom landing pages.</p>
                    <p className={styles.projectParaClass}>Tech Stack : HTML, CSS3 and Advanced JavaScript </p>
                    <div className={styles.projectButtonDivClass}>
                         <button onClick={()=>window.open("https://github.com/Amol-Talekar/unbounce","_blank")} className={styles.projectButtonClass}>Visit Github</button>
                         <button onClick={()=>window.open("https://drive.google.com/file/d/1-DvXWgLJu5KS3PK177svT06w1EnlJSXC/view?usp=sharing","_blank")} className={styles.projectButtonClass}>Visit Demo</button>
                    </div>
                </Box>

                <Box data-aos="zoom-in" className={classes.individualProjectBox} boxShadow={3}>                   
                <Link to="/#" className={styles.externalLinksClass} onClick={()=>window.open("https://github.com/shubham007kumar/Makemytrip","_blank")} >makemytrip.com</Link>
                    <img className={styles.projectImgClass} alt="makemytrip" src="/makemytriplogo.png" />
                    <p className={styles.projectParaClass}>Cloning makemytrip.com, a website that provides all services while planning a trip to any destination</p>
                    <p className={styles.projectParaClass}>Tech Stack : React, Redux, mongoDB, Material UI, HTML, CSS3 and JavaScript</p>
                   <div className={styles.projectButtonDivClass}>
                            <button onClick={()=>window.open("https://github.com/shubham007kumar/Makemytrip","_blank")} className={styles.projectButtonClass}>Visit Github</button>
                            <button onClick={()=>window.open("https://drive.google.com/file/d/13tO8Cm_0lQE7nNaxy4TB6Ovky_DGpCxU/view?usp=sharing","_blank")} className={styles.projectButtonClass}>Visit Demo</button>
                    </div>
                </Box>

                
            </Box>
            
            
            <Box boxShadow={4} className={classes.contactBox} id="contact" >
                <h1 className={styles.contactDropH1Class}>Drop me an email or call me. I would love to have a chat with you!</h1>
                <div className={styles.contactSingleDiv}>
                    <PhoneAndroidIcon fontSize="large"/>
                    <span className={styles.contactClass}>9028608781</span>
                </div>
                <div className={styles.contactSingleDiv}>
                    <EmailIcon fontSize="large" /> 
                    <span className={styles.contactClass}>amol11talekar@gmail.com</span>
                </div>
                <div className={styles.contactSingleDiv}>
                    <LinkedInIcon fontSize="large"/>
                    <Link to="/#" className={styles.contactClass} onClick={()=>window.open("https://www.linkedin.com/in/amol-talekar/","_blank")} >LinkedIn</Link>

                </div>
                <div className={styles.contactSingleDiv}>
                    <GitHubIcon fontSize="large"/>
                    <Link to="/#" className={styles.contactClass} onClick={()=>window.open("https://github.com/Amol-Talekar","_blank")} >Github</Link>

                </div>

                <div className={styles.resumeDivClass}>
                    <img className={styles.resumeImgClass} alt="Resume" src="/resumelogo.png" />
                    <Button
                        onClick={onDownload}
                        variant="contained"
                        color="default"
                        className={classes.resumeButton}
                        endIcon={<SystemUpdateAltIcon fontSize="large" />}
                        >
                        <p className={styles.resumeButtonParaClass}>Click here to download my Resume</p>
                       </Button>

                </div>
            </Box>
            <div className={styles.footerClass}  > 
                <p>Copyright &#169; 2021 All rights reserved</p>
            </div>
            <div style={{height:"5vh"}}>

            </div>
        </div>
        </Box>

    )
}

export {Home}
