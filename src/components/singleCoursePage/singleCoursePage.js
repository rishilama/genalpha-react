import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import CoursesDetailComp from '../CoursesDetailComp/CoursesDetailComp';

function SingleCoursePage() {

    const params = useParams();
    const {id} = params;
    console.log(id);

    const [courses, setCourses] = useState({});

    useEffect(()=>{
        const fetchCourses = async () => {
            try {
                const response = await fetch(`https://genlpha-courses-api-project.herokuapp.com/courses/${id}`)
                if (!response.ok){
                    throw new Error("Server responds with error!")
                }

                const data = await response.json();
                setCourses(data);
            }
            catch{
                console.log("err")
            }
        }
        fetchCourses();
    }, [id])




    return (
        <>


            {courses.id && 
                <>
                    <CoursesDetailComp {...courses} />
                </>
            }

            {!courses.id && <p>Something went wrong....</p>}
        </>
    )
}

export default SingleCoursePage