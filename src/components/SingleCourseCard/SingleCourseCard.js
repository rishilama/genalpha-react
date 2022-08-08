import React from 'react'

function SingleCourseCard( {image, name} ) {
    return (
        <div className="course__container">
            <img src={image} alt="course-img" className="course-image" />
            <a href="/home.html" className="course__link">

                <div className="course__name-container">
                    <p className="course__name">{name}</p>

                    <i className="fa fa-angle-right"></i>
                </div>
            </a>
        </div>
    )
}

export default SingleCourseCard