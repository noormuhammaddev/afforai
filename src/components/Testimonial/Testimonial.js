import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import './Testimonial.scss';

const Testimonial = ({
  data
}) => {
  return(
    <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
        {data.map((item, index) => (
          <div className="testimonial-block" key={index}>
            <div className="testimonial-msg">{item.message}</div>
      
            <div className="testimonial-sender">
              <div className="user-info">
                <div className="user-dp"><img src={item.userImg} alt="" /></div>
                <div className="user-name">{item.userName}</div>
              </div>
              <div className="user-btn">
                <a href={item.link}><img src={item.userActionImg} alt="Btn" /></a>
              </div>
            </div>
          </div>
        ))}
      </ScrollCarousel>
    
  )
}
export default Testimonial;