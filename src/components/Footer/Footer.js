import React from 'react'
import footerImage from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src={footerImage}  alt="footer image" />
                    </div>

                    <div className="col-md-3 col-12">
                        <div className="footer-des">
                            <p>About Online Food</p>
                            <p>Read Our Blog</p>
                            <p>SignUp to Delivery</p>
                            <p>Add Your Restrurant</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className="footer-des">
                            <p>Get Help</p>
                            <p>Read FAQS</p>
                            <p>View all Cities</p>
                            <p>Restrurant Near Me</p>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer
