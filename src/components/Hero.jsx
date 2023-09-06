import './Hero.css'
const Hero = ()=>{
    return(
        <section id="hero" className="hero--section">
        <div className="hero--parent">
               <div className="hero--img-wrapper">
                   <a className="hero--img-link" href="http://">
                       <img src="./src/assets/ubeBeignetsCropMatte.webp" alt="" />
                   </a>
               </div>
           </div> 
           <h3 className="hero--tag">community | family</h3>
           
        </section>
    )
}

export default Hero