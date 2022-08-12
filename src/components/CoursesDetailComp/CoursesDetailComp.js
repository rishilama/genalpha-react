import React from 'react'
import { Link } from 'react-router-dom';
import BookingSection from '../BookingSection/BookingSection'

function CoursesDetailComp({ id, pageHead, sectionHead, images , para }) {

    var myPara = [];
    myPara = para;

    return (
    


        <div className="single-course__page-content">
        <div className="container">
            <h1 className="single__course-name imp">{pageHead}</h1>

            <div className="first-half">
                <div className="left-side__first-half">
                    <img src={images.main} alt="Main" className="single__course-img" />
                </div>

                <div className="right-side__first-half">
                    <Link to="/book-a-class" onClick={()=> window.scrollTo({ top: 0, left: 0})} className="single__course-btn">Live Online Class</Link>
                    <p className="single__course-eligibility">Eligibility : Grade 1 - Grade 6</p>
                    <p className="single__course-duration"><b>Duration : </b> Number of session based on requirements</p>
                </div>
            </div>

            <div className="second-half">
                <div className="left-side__second-half">
                    <h2 className="couse-details__heading">{sectionHead}</h2>
                    <br />
                    <br />
                    {myPara.map((desc)=>{
                        return(
                            <p key={desc} className="couse-details__para">{desc}<br /><br /></p>
                        )
                    })}
                </div>

                <div className="right-side__second-half">
                    <img src={images.secMain} alt='secondimage' className="second-half__more-images" />
                    <img src={images.thirdMain} alt='thirdimage' className="second-half__more-images" />
                </div>
            </div>

            <BookingSection />
        </div>
        </div>

    )
}

export default CoursesDetailComp