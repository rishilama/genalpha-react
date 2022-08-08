import React from 'react'
import AboutVideo from '../AboutVideo/AboutVideo'

function AboutContent() {


    return (
        <>
            <h1 className="about__heading imp">About Us</h1>
            <h1 className="about__heading-moto not-imp">"WE LOOK THE BEST IN EVERY CHILD"</h1>
            <div className="about-content">
                

                <div className="about__video-container">
                    <AboutVideo />
                </div>

                <div className="about__text-container">
                    <p>GEN ALPHA not only helps in children in their academic courses but it also focuses on the development of a child's brain by Logic Building and Conceptual Building.
                        <br />
                        <br />
                        Our teacher having more than 5+ year experience in the field of Education, Now gen alpha  has student across the world and providing online tutoring for both Academics and Extra-Curricular Actitvities.
                    </p>
                    <br />
                    <br />
                    <h3>OUR GOALS:</h3>
                    <ul className="goals-list">
                        <li>Positive learning environment for your child</li>
                        <li>Innovative Teaching and Learning</li>
                        <li>Skill based learning</li>
                    </ul>
                        
                </div>

            </div>
        </>
    )
}

export default AboutContent