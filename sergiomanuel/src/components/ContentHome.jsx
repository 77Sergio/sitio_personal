import React from "react";
import amex from "./ima/american-express-logo.png";
import weardix from "./ima/weardix.jpg";
import ergeniz from "./ima/ergeniz.jpg";
import styles from "./ContentHome.module.css";

export const ContentHome = () => {
  return (
    <div className="container">
        <div className={styles.margen}>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
        
          <div className="card">
            
              <img src={weardix} className="card-img-top" alt="Weardix" />
              <div className="card-body">
                <h5 className="card-title">Weardix onlineshop</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div style={{ textAlign: "center", marginTop: 40 }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                    href="https://weardix.com/"
                  >
                    Show demo
                  </a>
                </div>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ergeniz} className="card-img-top" alt="Ergeniz" />
            <div className="card-body">
              <h5 className="card-title">Ergeniz - website</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://ergeniz.com.mx/"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ergeniz} className="card-img-top" alt="Ergeniz" />
            <div className="card-body">
              <h5 className="card-title">Ergeniz - website</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  href="https://ergeniz.com.mx/"
                >
                  Show demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={amex} className="card-img-top" alt="American Express" />
            <div className="card-body">
              <h5 className="card-title">
                American Express - Interactive courses
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
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
      </div>
      </div>
    </div>
  );
};
