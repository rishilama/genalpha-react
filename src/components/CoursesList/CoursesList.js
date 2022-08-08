import React from 'react'
import SingleCourseCard from '../SingleCourseCard/SingleCourseCard'

function CoursesList( {coursesData} ) {
    return (
        <div className="courses-section">
            <div className="courses-background__color">
                <div className="container">
                    <div className="list__courses">
                        {coursesData.map((coursesCard) => {
                            return(
                                <SingleCourseCard key={coursesCard.id} {...coursesCard} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesList