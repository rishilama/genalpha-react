function SmallSectionSingle( {cname, image, heading, buttonContent} ) {
  return (
    <div className={`section ${cname}`}>
        <div className="section-left">
            <img src={image} alt="img" className="section-image" />
        </div>
        <div className="section-right">
            <p className="section-right__content">{heading}</p>
            <a href="/" className="button">{buttonContent}</a>
        </div>
    </div>
  );
}

export default SmallSectionSingle;
