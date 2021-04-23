import React from 'react'
import './GridHero.css'

function GridHero({ 
    icon1, subHeading1 , content1, 
    icon2, subHeading2 , content2,
    icon3, subHeading3 , content3,
    icon4, subHeading4 , content4,
    icon5, subHeading5 , content5,
    icon6, subHeading6 , content6,
    icon7, subHeading7 , content7,
    icon8, subHeading8 , content8,
    mainHeading, caption
}) {
    return (
        <>
            <div className="heading">
               <h3>{mainHeading}</h3>
               <p>{caption}</p>
            </div>
            <div className="Home-grid">
              <div className="Home-grid-iteam">
                 <img src={icon1} alt="{alt}"/>
                 <h4>{subHeading1}</h4>
                 <p> {content1}</p>
              </div>
              <div className="Home-grid-iteam">
                 <img src={icon2} alt="{alt}"/>
                 <h4>{subHeading2}</h4>
                 <p> {content2}</p>
              </div>
              <div className="Home-grid-iteam">
                 <img src={icon3} alt="{alt}"/>
                 <h4>{subHeading3}</h4>
                 <p> {content3}</p>
              </div>
              <div className="Home-grid-iteam">
                 <img src={icon4} alt="{alt}"/>
                 <h4>{subHeading4}</h4>
                 <p> {content4}</p>
              </div>
              <div className="Home-grid-iteam">
                 <img src={icon5} alt="{alt}"/>
                 <h4>{subHeading5}</h4>
                 <p> {content5}</p>
              </div>
              <div className="Home-grid-iteam">
                 <img src={icon6} alt="{alt}"/>
                 <h4>{subHeading6}</h4>
                 <p> {content6}</p>
              </div>
              <div className="Home-grid-iteam">
                 <img src={icon7} alt="{alt}"/>
                 <h4>{subHeading7}</h4>
                 <p> {content7}</p>
              </div>
              <div className="Home-grid-iteam">
                 <img src={icon8} alt="{alt}"/>
                 <h4>{subHeading8}</h4>
                 <p> {content8}</p>
              </div>
            </div>
            
        </>
    )
}

export default GridHero
