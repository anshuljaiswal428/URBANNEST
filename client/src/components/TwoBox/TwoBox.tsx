import { useNavigate } from 'react-router-dom';
import '/src/css/TwoBox.css';

const TwoBox = () => {
    const navigate = useNavigate();

    return (
        <div className='two-box-container'>
            <div className="divi sectionleft">
                <div className="background-overlay"></div>
                <div className="leftcontent" onClick={() => navigate('/auth/Sign-up-owner')} >
                    <div className='owner-image'>
                        <img src="/public/assets/homepageimages/OwnerContent.jpeg" alt="Urban Nest Logo" className="owner-left" />
                    </div>
                    <div className='left-head'>
                        <span>Become a Advanced PG Owner</span>
                    </div>
                    <div className='left-subhead'>
                        <span>List Your PG with Us and Simplify Your Management Process.</span>
                    </div>
                </div>
            </div>
            <div className="divi sectionright">
                <div className="background-overlay"></div>
                <div className="rightcontent" onClick={() => navigate('/auth/Sign-up-customer')}>
                    <div className='customer-image'>
                        <img src="/public/assets/homepageimages/Customer.png" alt="Urban Nest Logo" className="customer-right" />
                    </div>
                    <div className='right-head'>
                        <span>Discover Your Perfect PG</span>
                    </div>
                    <div className='right-subhead'>
                        <span>Browse Verified Listings and Enjoy a Seamless Booking Experience.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoBox;
