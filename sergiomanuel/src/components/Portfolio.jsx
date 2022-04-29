import React from 'react'
import styles from "./Portfolio.module.css";
import amex from "./ima/american-express-logo.png";
import weardix from "./ima/weardix.jpg";
import ergeniz from "./ima/ergeniz.jpg";
import stps from "./ima/stps.png";
import cpm from "./ima/caja.png";
import inm from "./ima/inm.png";
import metlife from "./ima/metlife1.png";
import uanl from "./ima/uanl.png";
import latt from "./ima/latt.png";

export const Portfolio = () => {
  return (
    <>
<div className='container'>
<div className={styles.contenido} >
<div className={styles.contenido2}>
<div className={styles.overVideo}>
  <h1 style={{color:'white'}}>Portfolio</h1>
  <i><h3>Below I show some links to projects that I have developed.<br/></h3>
<h5>Most of the systems that I have developed cannot be visited because they work only in the internal network of the client.</h5></i><br/><br/>
  </div>
</div>
</div>

{/* Pestaña 1 */}
<div className="container" style={{paddingBottom:'50px'}}>
        <div className={styles.margen}>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
        
          <div className="card">
            
              <img src={weardix} className="card-img-top" alt="Weardix" />
              <div className="card-body">
                <h5 className="card-title" style={{textAlign: "center"}}>Weardix onlineshop</h5>
                <div style={{ textAlign: "center", marginTop: 40 }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                    href="https://weardix.com/"
                  >
                    Show Web site
                  </a>
                </div>
              
            </div>
          </div>
        </div>
        {/* Pestaña 2 */}
        <div className="col" style={{marginBottom:50}}>
          <div className="card">
            <img src={inm} className="card-img-top" alt="INM" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>Elearning evaluations</h5>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://www.youtube.com/watch?v=JJAt43PM0TM"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>

{/* Pestaña 3 */}
        <div className="col" style={{marginBottom:50}}>
          <div className="card">
            <img src={cpm} className="card-img-top" alt="cpm" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>Animación e ilustración</h5>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/yLb3XqSKQbI"
                >
                  Show video
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 4 */}
        <div className="col" style={{marginBottom:50}}>
          <div className="card">
            <img src={stps} className="card-img-top" alt="STPS" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>STPS - Electronic magazine</h5>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/dSmIgWnrYL8"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 5 */}
        <div className="col" style={{marginBottom:50}}>
          <div className="card">
            <img src={metlife} className="card-img-top" alt="Metlife" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>E-learning</h5>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/61LrLniDf-E"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 6 */}
        <div className="col" style={{marginBottom:50}}>
          <div className="card">
            <img src={stps} className="card-img-top" alt="STPS" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>STPS - UI Design</h5>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/gXxJTrqCT60"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 7 */}
        <div className="col">
          <div className="card">
            <img src={ergeniz} className="card-img-top" alt="Ergeniz" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>Ergeniz - website</h5>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://ergeniz.com.mx/"
                >
                  Show Web site
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 8 */}
        <div className="col">
          <div className="card">
            <img src={amex} className="card-img-top" alt="American Express" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>E-learning courses</h5>

              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://sergiomanuel.site/american_express/story_html5.html"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 9 */}
        <div className="col">
          <div className="card">
            <img src={uanl} className="card-img-top" alt="UANL" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>UANL - E-learning</h5>

              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/_XsgxrG84us"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 10 */}
        <div className="col">
          <div className="card">
            <img src={latt} className="card-img-top" alt="Lätt Systems" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>Social media content</h5>

              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/7c4HAboEhFw"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 11 */}
        <div className="col">
          <div className="card">
            <img src={inm} className="card-img-top" alt="INM" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>E-learning courses</h5>

              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/vcCY5EvJFUM"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pestaña 12 */}
        <div className="col">
          <div className="card">
            <img src={cpm} className="card-img-top" alt="Caja popular Mexicana" />
            <div className="card-body">
              <h5 className="card-title" style={{textAlign: "center"}}>Digital animation</h5>

              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://youtu.be/QQRezzg-hxI"
                >
                  Show demo
                </a>
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













</div>
</>
  )
}
