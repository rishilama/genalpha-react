import React, { useState } from 'react'
import NewStudent from '../../components/NewStudent/NewStudent';
import OldStudent from '../../components/OldStudent/OldStudent';
import './BookingFormPage.css';

function BookingFormPage() {

    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        if (page===0) {
            return <OldStudent />
        }
        else{
            return <NewStudent />
        }
    }

    return (
        <div className='booking-form__bg-color'>
            <div className='container'>
                <div className='margin-top'>

                    <div className='booking-form'>
                        <div className='booking-form-page__btn'>
                            <button className='booking-form__button'
                                // disabled = {page === 0} 
                                onClick={() => {
                                    setPage(1);
                                }}>
                                New Student
                            </button>
                            <button className='booking-form__button'
                                // disabled = {page === 1} 
                                onClick={() => {
                                    setPage(0);
                                }}>
                                Returning Student
                            </button>
                        </div>
                        


                        <div className='booking-form-page__body'>
                            {PageDisplay()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookingFormPage