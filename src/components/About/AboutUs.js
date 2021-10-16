import React from 'react'
import './AboutUs.css'
import aboutimage1 from '../../images/Image/1.png'
import aboutimage2 from '../../images/Image/2.png'
import aboutimage3 from '../../images/Image/3.png'

const AboutUs = () => {
    return (
        <div>
            <h2 className="header">Why You Chose Us</h2>
            <p className="description">All our factories we work with operate to BRC standard and are a minimum of grade A. We supply Global GAP, Red Tractor, Halal products as well as other accreditations into the UK market place.We provide exceptional delivery service 24/7 from our Polish centre of excellence, with a targeted service level of 99.8%.</p>

            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 col-12">
                        <div className="card card-all-des">
                            <img src={aboutimage1} className="card-img-top about-card-image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-shipping-fast"></i> First Delivery</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p>See More </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12">
                        <div className="card card-all-des">
                            <img src={aboutimage2} className="card-img-top about-card-image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-shipping-fast"></i> Home Delivery</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12">
                        <div className="card card-all-des">
                            <img src={aboutimage3} className="card-img-top about-card-image" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><i className="far fa-bell"></i> A Good Auto Responder</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

       
    )
}

export default AboutUs
