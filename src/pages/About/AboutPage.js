import AboutContent from '../../components/AboutContent/AboutContent';
import BookingSection from '../../components/BookingSection/BookingSection';
import FixedWhatsappComp from '../../components/FixedWhatsappComp/FixedWhatsappComp';
import './AboutPage.css';

function AboutPage() {
      return (
        <div className="about__bg">
            <div className="container">

                <AboutContent />

                <BookingSection />

                <FixedWhatsappComp />

            </div>
        </div>
    )
}

export default AboutPage