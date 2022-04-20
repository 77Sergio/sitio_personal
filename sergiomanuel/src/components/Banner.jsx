import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import video1 from './ima/cielo.mp4'
import style from './Banner.module.css'

export const Banner = () => {
  return (

        <div >
            
  <div className="video-background">

  <div className="video-wrap">
    <div id='video' >

      <video id='bgvid' autoPlay muted loop className={style.video}><source src={video1}/></video>
 

    </div>
    


  </div>
  
  

</div>
<div className='container'>
<div className={style.contenido} >
<div className={style.contenido2}>
<div className={style.overVideo}><h1 >Sergio Manuel Castañeda</h1></div>
<div className={style.overVideo}><h2 >Frontend Developer</h2>


<div ><button style={{fontSize:30, marginTop:50}} className="btn btn-outline-light">Portfolio</button></div>



</div>
</div>
</div>
</div>
</div>


  )
}
