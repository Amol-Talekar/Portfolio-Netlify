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
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const useStyles = makeStyles({
    techBox: {
     margin:"1vw",
     padding:"2vw",
     justifyContent:"center"
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
        justifyContent:"center" 
    },
    individualProjectBox:{
        margin:"1vw",
        padding:"1vw",
        backgroundColor:"rgb(250, 249, 249)"
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
        fontWeight:"bolder"
       
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
                <h1 className={styles.abouth2Class}><span  ><Wave  text="Hi there, I am  Amol Talekar," ></Wave></span>   it is very nice to meet you!</h1>
                <h2 className={styles.abouth2Class}>I am a passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai school’s intensive and immersive learning.  Look forward to joining a company where I will  be able to contribute towards individual and company growth.</h2>
           
               </div>
            </div>

            <Box  className={classes.techBox} boxShadow={3}>
            <h1>Tech Stacks with I work</h1>
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
                      <p className={styles.techParaClass}>mongoDB</p>
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
                <h1>My Projects</h1>
                <Box data-aos="flip-left" className={classes.individualProjectBox} boxShadow={3}>
                    <Link to="/#" className={styles.externalLinksClass} onClick={()=>window.open("https://github.com/Amol-Talekar/travelocity","_blank")} >travelocity.com</Link>
                    <img className={styles.projectImgClass} alt="travelocity" src="/travelocitylogo.png" />
                    <p className={styles.projectParaClass}>Cloning travelocity.com, a website that caters to all travel needs using HTML, CSS3 and Advanced JavaScript</p>
                </Box>
                
                <Box data-aos="flip-right" className={classes.individualProjectBox} boxShadow={3}> 
                <Link to="/#" className={styles.externalLinksClass} onClick={()=>window.open("https://github.com/Amol-Talekar/unbounce","_blank")} >unbounce.com</Link>
                    <img className={styles.projectImgClass} alt="unbounce" src="/unbouncelogo.png" />
                    <p className={styles.projectParaClass}>Cloning unbounce.com, a website that specializes in creating custom landing pages using HTML, CSS3 and JavaScript</p>
                </Box>

                <Box data-aos="zoom-in" className={classes.individualProjectBox} boxShadow={3}>                   
                <Link to="/#" className={styles.externalLinksClass} onClick={()=>window.open("https://github.com/shubham007kumar/Makemytrip","_blank")} >makemytrip.com</Link>
                    <img className={styles.projectImgClass} alt="makemytrip" src="/makemytriplogo1.png" />
                    <p className={styles.projectParaClass}>Cloning makemytrip.com, a website that provides all services while planning a trip using React, Redux, mongoDB, Material UI, HTML, CSS3 and JavaScript</p>
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
                    <span className={styles.contactClass}>amoll11talekar@gmail.com</span>
                </div>
                <div className={styles.contactSingleDiv}>
                    <LinkedInIcon fontSize="large"/>
                    <Link to="/#" className={styles.contactClass} onClick={()=>window.open("https://www.linkedin.com/in/amol-talekar-089210207/","_blank")} >https://www.linkedin.com/in/amol-talekar-089210207/</Link>

                </div>
                <div className={styles.contactSingleDiv}>
                    <GitHubIcon fontSize="large"/>
                    <Link to="/#" className={styles.contactClass} onClick={()=>window.open("https://github.com/Amol-Talekar","_blank")} >https://github.com/Amol-Talekar</Link>

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
                        Click here to download my Resume
                       </Button>

                </div>
            </Box>
            <div style={{height:"5vh"}}>

            </div>
        </div>
        </Box>

    )
}

export {Home}
