
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './index.scss'
import profile from '../../../assets/images/profile.png'

const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()
  
    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)
  
   
  
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 2.5,
          duration: 4,        }
      )
    }, [])
    
    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={profile} alt="WJ"/>
            <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          
        </g>
      </svg>

            </div>
    )           
}

export default Logo