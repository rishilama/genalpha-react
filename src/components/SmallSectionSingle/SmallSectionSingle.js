import { Link } from "react-router-dom";

function SmallSectionSingle( {cname, image, heading, buttonContent} ) {
  return (
    <div className={`section ${cname}`}>
        <div className="section-left">
            <img src={image} alt="img" className="section-image" />
        </div>
        <div className="section-right">
            <p className="section-right__content">{heading}</p>
            <Link to="/book-a-class" className="button" onClick={()=> window.scrollTo({ top: 0, left: 0})}>{buttonContent}</Link>
        </div>
    </div>
  );
}

export default SmallSectionSingle;
