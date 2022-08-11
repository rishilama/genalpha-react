import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import CoursesDetailComp from '../CoursesDetailComp/CoursesDetailComp';

function SingleCourseDetail() {

    const params = useParams();
    const {id} = params;

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

            {!courses.id && <p className='loading'>Please wait Loading the details...</p>}
        </>
    )
}

export default SingleCourseDetail