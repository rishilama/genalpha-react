import './CoursesPage.css';

import React from 'react'
import CoursesHero from '../../components/CoursesHero/CoursesHero';
import CoursesList from '../../components/CoursesList/CoursesList';
import CoursesListData from '../../dummy data/CoursesListData';

function CoursesPage() {
    return (
        <>
            <CoursesHero />

            <CoursesList coursesData={CoursesListData} />
        </>
    )
}

export default CoursesPage