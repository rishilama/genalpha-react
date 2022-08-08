import React from "react";

function ProfitSectionSingle( {divCname, imgCname, image, heading, para} ) {
    return (
        <div className={`${divCname}`}>
            <img src={image} alt="icon" className={`${imgCname}`} />
            <div className="point">
                <h2 className="point-head">{heading}</h2>
                <p className="point-content">
                    {para}
                </p>
            </div>
        </div>
    );
}

export default ProfitSectionSingle;
