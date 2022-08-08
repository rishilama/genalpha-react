import AboutContent from '../../components/AboutContent/AboutContent';
import AboutFreeTrial from '../../components/AboutFreeTrial/AboutFreeTrial';
import './AboutPage.css';

function AboutPage() {
      return (
        <div className="about__bg">
            <div className="container">

                <AboutContent />

                <AboutFreeTrial />

            </div>
        </div>
    )
}

export default AboutPage