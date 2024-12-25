// import React from 'react'
import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/right-arrow.svg'
export const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-title">
            <h1>Certifications</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return(
                  <div key={index} className="certificate"> 
                      <img src={work.w_img}></img>
                    <div className="overlay">
                      <p><a href={work.link} target="_blank">view</a></p>
                    </div>
                  </div>
                );
            })}
        </div>
        {/* <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div> */}
    </div>
  )
}
export default MyWork