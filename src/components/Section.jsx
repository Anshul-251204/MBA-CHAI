import React from 'react'
import '../components/style/section.scss'

const Section = ({h3, p, hasbutton = true, btntext, imgscr, imgwidth = "60%", headingColor, pColor, bgColor, btnColor, btnBgColor }) => {
  return (
    <div className='section'
    
    style={{
        backgroundColor:bgColor    
    }}
    
    >
        <div>

            <h3

             style={{
                color:headingColor,
            }}

            >{h3}</h3>

            <p 

            style={{
                color:pColor,    
            }}
            
            >{p}</p>

            { hasbutton && <button className='btn'

             style={{
                color:btnColor,
                backgroundColor:btnBgColor, 
            }}

            >{btntext}</button>}

            <div>
                <img src={imgscr} 

                 style={{
                     width:imgwidth,
                }}
                
                alt="Image" />
            </div>

        </div>
    </div>
  )
}

export default Section