import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="contact-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12" />
                        </div>
                    </div>
                </div>
                {/* contact section */}
                <div id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-sm-12">
                                <h2>Get in touch</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                            </div>
                            <div className="col-md-8 col-sm-8 mt30">
                                <form action="#" method="post" role="form">
                                    <div className="col-md-6 col-sm-6">
                                        <label htmlFor="name">NAME</label>
                                        <input name="name" type="text" className="form-control" id="name" />
                                        <label htmlFor="email">EMAIL</label>
                                        <input name="email" type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <label htmlFor="message">MESSAGE</label>
                                        <textarea name="message" rows={6} className="form-control" id="message" defaultValue={""} />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <button type="submit" name="submit" className="btn btn-default">SEND</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 col-sm-4 address">
                                <div>
                                    <h3>Email</h3>
                                    <p>info@company.com</p>
                                </div>
                                <div>
                                    <h3>Phones</h3>
                                    <p>010-020-0340 | 090-080-0760</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 mt20">
                                <h3>Location</h3>
                                <div className="google_map mt20">
                                    <div id="map-canvas" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact