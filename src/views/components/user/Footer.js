import React from 'react';
import './dashboard/dashboard.css';
import '../../../assets/general-assets/css/animate.min.css';
import '../../../assets/general-assets/css/default.css';
import '../../../assets/general-assets/css/bootstrap.min.css';
import '../../../assets/general-assets/css/nice-select.css';
import '../../../assets/general-assets/css/style.css';
import '../../../assets/general-assets/css/responsive.css';
import '../../../assets/general-assets/css/slick.css';
import '../../../assets/general-assets/fonts/flaticon/font/flaticon.css'

function Footer() {
    return(
        <div>{/*className="footer-wrapper"*/}
                  {/* <!--====== Start Footer Area ======--> */}
        <footer className="footer-area footer-area-v2 bg-royal-blue" >
            <div className="container">
            <div className="footer-area-internal">
            <div className="row">
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="single-footer-widget footer-text-widget">
                    <img src="https://res.cloudinary.com/kardinal/image/upload/v1646050697/kardinal/logos/logo-kardinal-white_ilzrgk.png" alt="footer logo" />
                    <p style={{"textAlign": 'left'}}>2a Alara Steet, Sabo Yaba, Lagos Nigeria.<br/>wecare@gokardinal.com<br/>+234 8025198619</p>
                    {/* <!--<a className="footer-contact-link" href="tel:+01234567899"><i className="fas fa-phone"></i> +012 (345) 678 99</a>--> */}
                                            <a href="contact.html" className="btn-contact">Contact Us</a>
                </div> 
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="single-footer-widget">
                    <h5 className="widget-title">Solutions</h5>
                    <div className="footer-widget-menu">
                        <ul>
                            <li><a href="travel.html">Travel</a></li>
                            <li><a href="hotel.html">Hotel</a></li>
                            <li><a href="#">Accomodation</a></li>
                            <li><a href="#">Corporate Hospitality</a></li>
                        </ul>
                    </div>
                </div> 
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="single-footer-widget">
                    <h5 className="widget-title">Resources</h5>
                    <div className="footer-widget-menu">
                        <ul>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Webinars</a></li>
                            {/* <!--<li><a href="#">Ebooks</a></li>--> */}
                            <li><a href="https://gokardinal.medium.com/" target="_blank">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single Footer Widget --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="single-footer-widget">
                    <h5 className="widget-title">Follow On</h5>
                    <div className="footer-social-links">
                        <ul>
                            <li><a href="https://facebook.com/gokardinal"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/gokardinal"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCN_Da94kEH8yvQu5mirZgrQ"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://instagram.com/gokardinal"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://linkedin.com/company/kardinalinc"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; 2021 <a href="#">Kardinal</a> <br/>All Rights Reserved</p>
                    </div>
                </div> 
            </div>
            </div> {/* <!-- /.row -->*/}
            </div> {/*<!-- /.footer-area-internal -->*/}
            </div> {/*<!-- /.container -->*/}
        
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="earlyaccessModal" role="dialog" aria-labelledby="exampleModalCenterTitle">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Go Kardinal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <form>
                          <div className="modal-body">
                            <div className="input-group mb-4">
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name" name="firstname" required />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" name="lastname" required />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="email" className="form-control" id="emailAddress" placeholder="Email Address" name="email" required />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control" id="companyName" placeholder="Company Name" name="companyName" required />
                                    </div>
                                
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="filled-btn bg-filled button-radius btn-bordered" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn1">Join waiting list</button>
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>    
        </footer> {/*<!-- /.footer-area -->*/}
        {/* <!--====== End Footer Area ======-->
        <!--======= Scroll To Top =======--> */}
        </div>
    )
}

export default Footer;