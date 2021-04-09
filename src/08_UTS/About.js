import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div>
                <div id="about-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12" />
                        </div>
                    </div>
                </div>
                <div id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-sm-12">
                                <h2>Meet the crew!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>
                        <div className="row mt30">
                            <div className="col-md-4 col-sm-4 col-xs-9">
                                <div className="team-wrapper">
                                    <img src="assets/images/team1.jpg" className="img-responsive" alt="team img" />
                                    <h3>LINDA</h3>
                                    <h4>Creative Director</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-9">
                                <div className="team-wrapper">
                                    <img src="assets/images/team2.jpg" className="img-responsive" alt="team img" />
                                    <h3>JULIA</h3>
                                    <h4>UX Designer</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-9">
                                <div className="team-wrapper">
                                    <img src="assets/images/team3.jpg" className="img-responsive" alt="team img" />
                                    <h3>MARY</h3>
                                    <h4>Frontend Developer</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt30">
                            <div className="col-md-12 col-sm-12">
                                <hr />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <h3>Onetel Design Studio</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <strong>HTML5 &amp; CSS3</strong>
                                <span className="pull-right">100%</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }} />
                                </div>
                                <strong>BOOTSTRAP</strong>
                                <span className="pull-right">80%</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                                </div>
                                <strong>UX Design</strong>
                                <span className="pull-right">70%</span>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About