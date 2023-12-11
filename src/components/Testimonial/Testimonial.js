import './Testimonial.scss';
 
const Testimonial = ({
  message,
  userImg,
  userName,
  userActionImg,
  link,
}) => {
  return(
    <div className="testimonial-block">
      <div className="testimonial-msg">{message}</div>

      <div className="testimonial-sender">
        <div className="user-info">
          <div className="user-dp"><img src={userImg} alt="" /></div>
          <div className="user-name">{userName}</div>
        </div>
        <div className="user-btn">
          <a href={link}><img src={userActionImg} alt="Btn" /></a>
        </div>
      </div>
    </div>
  )
}
export default Testimonial;