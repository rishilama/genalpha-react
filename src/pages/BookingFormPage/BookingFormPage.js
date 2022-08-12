import React, { useState } from 'react'
import NewStudent from '../../components/NewStudent/NewStudent';
import OldStudent from '../../components/OldStudent/OldStudent';
import './BookingFormPage.css';

function BookingFormPage() {

    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        if (page===0) {
            return <NewStudent />
        }
        else{
            return <OldStudent />
        }
    }

    return (
        <div className='booking-form__bg-color'>
            <div className='container'>
                <div className='margin-top'>

                    <div className='booking-form'>
                        <div className='booking-form-page__btn'>
                            <button className='booking-form__button'
                                onClick={() => {
                                    setPage(0);
                                }}>
                                New Student
                            </button>
                            <button className='booking-form__button'
                                onClick={() => {
                                    setPage(1);
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