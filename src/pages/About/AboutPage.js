import AboutContent from '../../components/AboutContent/AboutContent';
import BookingSection from '../../components/BookingSection/BookingSection';
import './AboutPage.css';

function AboutPage() {
      return (
        <div className="about__bg">
            <div className="container">

                <AboutContent />

                <BookingSection />

            </div>
        </div>
    )
}

export default AboutPage