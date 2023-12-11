import './FeatureMediaText.scss';

const FeatureMediaText = ({
  media, 
  detail,
  mediaAlign = "right"
}) => {
  return (
    <>
      <div className={`col-row ${mediaAlign}`}>
        <div className="text">{detail}</div>
        <div className="media">
          <img src={media} alt="text" />
        </div>
      </div>
    </>
  )
}
export default FeatureMediaText;