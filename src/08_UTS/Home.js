import React, { Component } from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* home section */}
                <div id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-3" />
                            <div className="col-md-7 col-sm-9">
                                <h3>welcome to</h3>
                                <h1>Onetel Design Studio</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* divider section */}
                <div className="divider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="divider-wrapper divider-one">
                                    <i className="fa fa-laptop" />
                                    <h2>Responsive</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="divider-wrapper divider-two">
                                    <i className="fa fa-mobile" />
                                    <h2>Easy to use</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="divider-wrapper divider-three">
                                    <i className="fa fa-life-ring" />
                                    <h2>Quick Support</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about section */}
                <div id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <img src="assets/images/about-img.jpg" className="img-responsive" alt="about img" />
                            </div>
                            <div className="col-md-6 col-sm-12 about-des">
                                <h2>Startup Business</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                                <a href="about.html" className="btn btn-default">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* portfolio section */}
                <div id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-sm-12">
                                <h2>Recent Projects</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>
                        <div className="row mt30">
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <a href="assets/images/portfolio-img1.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img1.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <a href="assets/images/portfolio-img2.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img2.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <a href="assets/images/portfolio-img3.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img3.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <a href="assets/images/portfolio-img4.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img4.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <a href="assets/images/portfolio-img5.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img5.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <a href="assets/images/portfolio-img6.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img6.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <a href="assets/images/portfolio-img7.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img7.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <a rel="nofollow" href="http://www.templatemo.com/tag/darkgray" className="btn btn-default">View More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright section */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <p>Copyright © 2084 Company Name</p>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <ul className="social-icons">
                                    <li><a href="#" className="fa fa-facebook" /></li>
                                    <li><a href="#" className="fa fa-twitter" /></li>
                                    <li><a href="#" className="fa fa-dribbble" /></li>
                                    <li><a href="#" className="fa fa-pinterest" /></li>
                                    <li><a href="#" className="fa fa-behance" /></li>
                                    <li><a href="#" className="fa fa-envelope-o" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home