import './NotFoundError.css';
import { Link } from 'react-router-dom';

function NotFoundError() {
    return (
        <div className="error-page-content">
            <div className='error-img-group'>
                <img src="/img/first4.png" alt="4" className="error-image" />
                <img src="/img/middle0.png" alt="m0" className="error-image" />
                <img src="/img/last4.png" alt="l4" className="error-image" />
            </div>
            <div className='error-text'>
                <h1 className="error-head">Ooops, looks like a ghost</h1>
                <p className="error-para">The page you are looking for can't be found. Go home by <Link to="/" className="home-link">clicking here</Link></p>
            </div>
        </div>
    )
}

export default NotFoundError