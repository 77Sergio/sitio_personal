import React from "react";
import amex from "./ima/american-express-logo.png";
import enzacta from "./ima/enzacta_1.png";
import scanda from "./ima/scanda1.png";
import axa from "./ima/axa1.png";
import metlife from "./ima/metlife1.png";
import styles from "./ContentHome.module.css";
import { NavLink } from 'react-router-dom';
import yo from './ima/foto_yo.jpeg'
import './ContentHome.module.css'

export const ContentHome = () => {
  return (


<>
<div className='container'>


<div className={styles.contenido} >
<div className={styles.contenido2}>
<div className={styles.overVideo}><h1 >Sergio Manuel Castañeda</h1></div>
<div className={styles.overVideo}><h2 >Frontend Developer</h2>


<div ><NavLink style={{fontSize:24, marginTop:50}} className="btn btn-outline-light" to='/portfolio'>Portfolio</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
<a style={{fontSize:24, marginTop:50}} className="btn btn-outline-light" href="https://www.sergiomanuel.site/resume.pdf" target='_blank'>Resume</a></div>



</div>
</div>
</div>
</div>


<div className='container'>
<div className="card tarjeta">
<div className="row p-3 g-4">

<div className="col w-100 columnaFoto">
<img src={yo} alt="Yo" className={styles.foto} width='300'/>
</div>

<div className="col w-100 columna1">

<p><b>In my professional career I have covered positions that require systems development, administration and design:
</b></p>
<p>Last 3 years I have been working as a Front End developer using primarily React JS. My design and communication degree allows me to work on the visual and conceptual part of the projects; my knowledge in JavaScript, CSS and HTML, allows me to give the functionality that is required. My experience as work teams coordinator allows me to incorporate agile methodologies for development.

</p>

</div>
<div className="col w-100 columna2" style={{background:'lightgray', padding:'20px', borderRadius: '5px', marginRight:'10px'}}>
  <h5>
<ul>
<li>More than 15 years using HTML, CSS and JavaScript.</li>
<li>React – 3 years (Hookes, API rest, etc.)</li>
<li>More than 15 Years experiencing with design patterns.</li>
<li>Last 3 years using git, github, Jira and Trello.</li>
<li>Low experience with BackEnd (PHP and Laravel).</li>
</ul>
</h5>
</div>


</div>
</div>
</div>


<br />



    <div className="container" style={{paddingBottom:'50px'}}>
        <div className={styles.margen}>
        <br /> <br /><h2 className={styles.overVideo}>Trajectory</h2><br />
      <div className="row row-cols-2 row-cols-md-2 g-4 ">
        <div className="col w-100">
          <div className="card">
            
              <img src={enzacta} className="card-img-top" alt="ENZACTA" />
              <div className="card-body">
                <h5 className="card-title">ENZACTA - Frontend Developer Senior</h5>
                <p>September 2021 – April 2022</p>
                <ul className="card-text">
<li>System development, using (CSS, JavaScript, JQuery, PHP, Wordpress, React, MySQL, Bootstrap, etc.)</li>
<li>Develop new systems and new modules for systems developed in Joomla, Wordpress, PHP and Laravel.</li>
<li>Create templates for wordpress.</li>
<li>Adapt wordpress modules for new requirements.</li>
<li>Search engine optimization and positioning (SEO) Graphic design.</li>
<li>Manage Google Analytics for all Systems of the company and social media Analytics. And work new reports for additional requirements.</li>
<li>Update old systems using bootstrap and CSS for the look & feel and PHP and JS for functionality. </li>

                </ul>
                <div style={{ textAlign: "center", marginTop: 40 }}>
                </div>
              
            </div>
          </div>
        </div>
        
        <div className="col w-100" style={{marginBottom:50}}>
          <div className="card">
            <img src={scanda} className="card-img-top" alt="SCANDA" />
            <div className="card-body">
              <h5 className="card-title">Lätt Systems & SCANDA - Web developer (By project) </h5>
              <p>August 2018 – September 2021</p>
              <ul className="card-text">
              <li>Website e-commerce and e-learning development, (HTML5, JavaScript, JQuery, PHP, Wordpress, MySQL,React, Bootstrap, Storyline, Captivate,  etc.)</li>
              <li>Online billing and shipping configuration (Stripe, PayPal, EnvíaYa, DonEnvío, etc.)</li>
              <li>Social netwoks administration and publications design.</li>
              <li>Search engine optimization and positioning (SEO).</li>
              <li>Digital animation.</li>
              <li>Audio and video editing.</li>
<li>Adapt wordpress modules for new requirements.</li>
<li>Search engine optimization and positioning (SEO) Graphic design.</li>
<li>Manage Google Analytics for all Systems of the company and social media Analytics. And work new reports for additional requirements.</li>
              </ul>
              <div style={{ textAlign: "center", marginTop: 40 }}>
              </div>
            </div>
          </div>
        </div>
        <div className="col w-100">
          <div className="card">
            <img src={axa} className="card-img-top" alt="AXA"/>
            <div className="card-body">
              <h5 className="card-title">Neoris / AXA - Moodle Developer / Software Administrator</h5>
              <p>October 2018 - June 2019</p>
              <ul className="card-text">
              <li>Training system develop for train and evaluate external AXA colaborators based on Moodle and using PHP, JavaScript and MySQL.</li>
              <li>System administration for online training and evaluation (Registration, cancellation, reports, etc.)</li>
              <li>Organizational change management strategy development for implementation of CFDI 3.3 in systems.</li>
              <li>Events logistic organization (conferences, classroom trainings, etc.)</li>
              <li>Document and project administration, using SharePoint, Jira, Trello, etc. </li>
              </ul>
              <div style={{ textAlign: "center", marginTop: 40 }}>
              </div>
            </div>
          </div>
        </div>
        <div className="col w-100">
          <div className="card">
            <img src={metlife} className="card-img-top" alt="Metlife"/>
            <div className="card-body">
              <h5 className="card-title">
                Metlife - Development Coordinator / Change Management 
              </h5>
              <p>April 2013 - October 2018
</p>
              <ul className="card-text">
              <li>Web materials development for online training (e-learning).</li>
              <li>Courses Packaging (SCORM standard) using JavaScript and XML.</li>
              <li>Functionality and quality tests.</li>
              <li>SAP Success Factors and ORACLE PeopleSoft system administration.</li>
              <li>Developer teams coordinator (designers, programmers and pedagogues).</li>
                <li>Organizational change strategies development (Training, communication, documentation repositories, etc.) for implementation of a global strategies in Latin America.
                </li>
              </ul>
              <div style={{ textAlign: "center", marginTop: 40 }}>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      <br />
      <br />
      <br />
    </div>
    </>
    
  );
};
