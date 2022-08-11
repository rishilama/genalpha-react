import './CoursesPage.css';

import React from 'react'
import CoursesHero from '../../components/CoursesHero/CoursesHero';
import CoursesList from '../../components/CoursesList/CoursesList';
import CoursesListData from '../../dummy data/CoursesListData';
import FixedWhatsappComp from '../../components/FixedWhatsappComp/FixedWhatsappComp';

function CoursesPage() {
    return (
        <>
            <CoursesHero />

            <CoursesList coursesData={CoursesListData} />

            <FixedWhatsappComp />
        </>
    )
}

export default CoursesPage