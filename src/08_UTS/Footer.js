import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                {/* footer section */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-4">
                                <img src="assets/images/logo.png" className="img-responsive" alt="logo" />
                                <p>Onetel is free Bootstrap v3.3.5 HTML5 layout from
            <a rel="nofollow" href="http://www.facebook.com/templatemo" target="_parent">templatemo</a> website.Feel free to use it for your website.</p>
                                <p><i className="fa fa-phone" /> 010-020-0340</p>
                                <p><i className="fa fa-envelope-o" /> info@company.com</p>
                                <p><i className="fa fa-globe" /> www.company.com</p>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <h3>Useful Links</h3>
                                <p><a href="#">HTML5 Templates</a></p>
                                <p><a href="#">CSS3 Tricks</a></p>
                                <p><a href="#">Design Blog</a></p>
                                <p><a href="#">Animations</a></p>
                            </div>
                            <div className="col-md-4 col-sm-4 newsletter">
                                <h3>Newsletter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
                                <div className="input-group">
                                    <form action="#" method="post">
                                        <input name="email" type="email" placeholder="Enter your email" className="form-control" autorequired />
                                        <button type="submit" name="submit" className="btn email">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer