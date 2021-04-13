import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        about: state.about
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutData: []
        };
    }

    componentDidMount() {
        // console.log(this.props.recentPost.data)
        this.setState({
            aboutData: this.props.about.data
        })
    }
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
                        <div className="row mt30">{
                            this.state.aboutData.length > 0 &&
                            this.state.aboutData.map((el, i) => {
                                return (
                                    <div className="col-md-4 col-sm-4 col-xs-9" key={i}>
                                        <div className="team-wrapper">
                                            <img src={el.img} className="img-responsive" alt="team img" />
                                            <h3>{el.name}</h3>
                                            <h4>{el.pos}</h4>
                                            <p>{el.dec}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

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
export default connect(mapStateToProps, mapDispatchToProps)(About)