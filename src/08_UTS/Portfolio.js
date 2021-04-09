import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                {/* portfolio header section */}
                <div id="portfolio-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12" />
                        </div>
                    </div>
                </div>
                {/* portfolio section */}
                <div id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-sm-12">
                                <h2>Our Projects</h2>
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
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <a href="assets/images/portfolio-img7.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img7.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <a href="assets/images/portfolio-img8.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img8.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <a href="assets/images/portfolio-img9.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img9.jpg" alt="portfolio img" /></a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-6">
                                <a href="assets/images/portfolio-img10.jpg" data-lightbox-gallery="portfolio-gallery"><img src="assets/images/portfolio-img10.jpg" alt="portfolio img" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio