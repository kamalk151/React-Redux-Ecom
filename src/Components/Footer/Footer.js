import Newsletter from './NewsLetter'
import AboutUs from './AboutUs'
import Categories from './Categories'
{/** 
    Footer Component
*/}
function Footer() {
    return (
        <>
            <div className="footer-top-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <AboutUs />
                        <Categories />
                        <Newsletter />
                    </div>
                </div>
            </div> 
            {/*End footer top area*/}

            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="copyright">
                                <p>&copy; 2015 uCommerce. All Rights Reserved. <a href="http://www.freshdesignweb.com" target="_blank">freshDesignweb.com</a></p>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="footer-card-icon">
                                <i className="fa fa-cc-discover"></i>
                                <i className="fa fa-cc-mastercard"></i>
                                <i className="fa fa-cc-paypal"></i>
                                <i className="fa fa-cc-visa"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/*End footer bottom area */}
        </>
    );
}

export default Footer;