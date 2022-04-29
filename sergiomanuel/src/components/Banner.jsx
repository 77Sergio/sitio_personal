import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import video1 from './ima/night2.mp4'
import video2 from './ima/forest.mp4'
import video3 from './ima/ocean2.mp4'
import video4 from './ima/future.mp4'
import styles from './Banner.module.css'
import {Spring} from 'react-spring';

export const Banner = () => {

const current_video = video1;

const numLoading = 1;

const [videox, setvideox] = useState(current_video);

const [num, setnum] = useState(numLoading)


const seleccionaVideo = (e) =>{
  const videoEscogido = e.target.value;
  setvideox(videoEscogido)
}



useEffect(()=>{
  
  function changeVideo(){

    
    var nuevoVideo;
if(videox === video1){
  document.getElementById('bgvid').src = video1;
}
if(videox === video2){
  document.getElementById('bgvid').src = video2;
}
if(videox === video3){
  
  document.getElementById('bgvid').src = video3;
  
}
if(videox === video4){
  
  document.getElementById('bgvid').src = video4;
  
}
}
changeVideo();
},[videox, num])

function cambiaNum(){
  alert('Click')

  }


  return (

        <div >
            
  <div className="video-background">
  <div className="video-wrap">
    <div id='video' >
    <video id='bgvid' autoPlay muted loop className={styles.video}><source id='vd' src={videox}/></video>
    </div>
  </div>
</div>





<div className={styles.footer}>



<div className={styles.contiene}>
<span className={styles.texto_footer}>Change background: </span>
<select className="form-select form-select-sm" aria-label=".form-select-sm example" style={{margin:20, maxWidth:600}} onChange={seleccionaVideo}>
  <option selected value={video1} onMouseDown={()=>cambiaNum()}>Night</option>
  <option value={video2} onClick={()=>cambiaNum()}>Forest</option>
  <option value={video3} onClick={()=>cambiaNum}>Ocean</option>
  <option value={video4} onClick={()=>cambiaNum}>Future</option>
</select>
</div>





</div> 


</div>


  )
}
