import React from "react";
import SmallSectionSingle from "../SmallSectionSingle/SmallSectionSingle";


function SmallSection({ sectionData }) {
  return (
    <div className="container">
        <div className="small-section">
            <div className="small-section__content">
                {sectionData.map((sectionSingle) => {
                    return(
                        <SmallSectionSingle key={sectionSingle.id} {...sectionSingle} />
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default SmallSection;
