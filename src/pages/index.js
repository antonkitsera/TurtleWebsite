import React, { Fragment, useState } from 'react';

import "../styles/main.scss"

import { Link } from "../components/Router";

import HomeTurtle from "../images/home-img.png"

import FeatureFirst from "../assets/features-1.svg"
import FeatureSecond from "../assets/features-2.svg"
import FeatureThird from "../assets/features-3.svg"
import FeatureFourth from "../assets/features-4.svg"
import FeatureFifth from "../assets/features-5.svg"
import FeatureSixth from "../assets/features-6.svg"

import LoginGitHub from "../components/LoginGitHub"

import CodeView from "../components/CodeView"

const MainPage = () => {

    return(
        <Fragment>
            <section className="home">
                <div className="home__wrapper container">
                    <div className="home-info">
                        <div className="home-info__content">
                            <h1 className="home-info__title">Cross platform messaging SDK</h1>
                            <p className="home-info__text">Web, mobile, servers, micro-services, IoT... can now talk the same language.</p>

                            <p className="home-info__text">Serverless, with built-in persistence and advanced querying and filtering.</p>

                            <LoginGitHub />
                        </div>
                    
                        <div className="home-info__image">
                            <img className="home-info__source" src={HomeTurtle} alt="" />
                        </div>
                    </div>
                    
                    <CodeView />
                </div>
            </section>

            <section className="features">
                <h2 className="g-title">Features</h2>

                <div className="features__wrapper container">
                    <div className="features-item">
                        <div className="features-item__icon">
                            <img className="features-item__source" src={FeatureFirst} alt="Devops Friendly"/>
                        </div>

                        <h5 className="features-item__title">Devops friendly</h5>
                        <p className="features-item__text">Choose from hosted or any cloud - private or public without external dependencies. We run on kubernetes.</p>
                    </div>
                    
                    <div className="features-item">
                        <div className="features-item__icon">
                            <img className="features-item__source" src={FeatureSecond} alt="Production Ready"/>
                        </div>

                        <h5 className="features-item__title">Production ready</h5>
                        <p className="features-item__text">Distributed, with no single point of failure. Acknowledgements, automatic reconnection, authentication and fine-grained authorization. Built-in persistence and introspection via tracing and SQL analytics.</p>
                    </div>

                    <div className="features-item">
                        <div className="features-item__icon">
                            <img className="features-item__source" src={FeatureThird} alt="Developer Friendly"/>
                        </div>

                        <h5 className="features-item__title">Developer friendly</h5>
                        <p className="features-item__text">What you send is what you get. Automatic channel creation. Publish-subscribe or response-request. You won't have to learn about exchanges, routes, dead-letter queues, rebalancing, sharding (unless you want to).</p>
                    </div>

                    <div className="features-item">
                        <div className="features-item__icon">
                            <img className="features-item__source" src={FeatureFourth} alt="Time Saver"/>
                        </div>

                        <h5 className="features-item__title">Time saver</h5>
                        <p className="features-item__text">Choose from hosted or any cloud - private or public without external dependencies. We run on kubernetes.</p>
                    </div>

                    <div className="features-item">
                        <div className="features-item__icon">
                            <img className="features-item__source" src={FeatureFifth} alt="Powerful functions"/>
                        </div>

                        <h5 className="features-item__title">Powerful functions</h5>
                        <p className="features-item__text">Delayed messages. Channels regex selection (not just wildcard). Built-in prioritization. Advanced filter like geolocalization and JsonPath.</p>
                    </div>

                    <div className="features-item">
                        <div className="features-item__icon">
                            <img className="features-item__source" src={FeatureSixth} alt="Dashboard"/>
                        </div>

                        <h5 className="features-item__title">Devops friendly</h5>
                        <p className="features-item__text">What you send is what you get. Automatic channel creation. Publish-subscribe or response-request. You won't have to learn about exchanges, routes, dead-letter queues, rebalancing, sharding (unless you want to).</p>
                    </div>
                </div>
            </section>

            <section className="pricing" id="pricing">
                <div className="pricing__wrapper container">
                    <h2 className="g-title">Simple and Transparent Pricing</h2>
                    <p className="pricing__subtitle">Choose your ideal plan</p>

                    <div className="pricing__content">
                        <div className="pricing-item">
                            <h5 className="pricing-item__type">Personal</h5>
                            <h2 className="pricing-item__price">Free</h2>
                            <h6 className="pricing-item__time">forever</h6>
                            <p className="pricing-item__data"><span className="pricing-item__data_bold">10K</span> messages/month</p>
                            <p className="pricing-item__data"><span className="pricing-item__data_bold">500MB</span> data persistence</p>

                            <form className="g-button" action="/security/oauth2/initiate-github" method="POST">
                                <button className="g-button__text" type="submit">Use for free</button>
                            </form>
                        </div>

                        <div className="pricing-item pricing-item_pro">
                            <h5 className="pricing-item__type">Pro</h5>
                            <h2 className="pricing-item__price">&#163;50</h2>
                            <h6 className="pricing-item__time">Per month</h6>
                            <p className="pricing-item__data"><span className="pricing-item__data_bold">1M</span> messages/month</p>
                            <p className="pricing-item__data"><span className="pricing-item__data_bold">50GB</span> data persistence</p>

                            <form className="g-button" action="/security/oauth2/initiate-github" method="POST">
                                <button className="g-button__text g-button__text_fill" type="submit">Free while in beta</button>
                            </form>
                        </div>

                        <div className="pricing-item">
                            <h5 className="pricing-item__type">Personal</h5>
                            <h2 className="pricing-item__price">&#163;149</h2>
                            <h6 className="pricing-item__time">Per month</h6>
                            <p className="pricing-item__data"><span className="pricing-item__data_bold">10M</span> messages/month</p>
                            <p className="pricing-item__data"><span className="pricing-item__data_bold">500GB</span> data persistence</p>
                            
                            <form className="g-button" action="/security/oauth2/initiate-github" method="POST">
                                <button className="g-button__text" type="submit">Free while in beta</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="contact__wrapper container">
                    <h3 className="contact__question">Do you have any questions?</h3>
                    <p className="contact__text">contact us via email</p>
                    <a className="contact__link" href="mailto:turtle@turtlequeue.com">turtle@turtlequeue.com</a>
                    <p className="contact__text">or send a message</p>

                    <form className="contact-form">
                        <label className="contact-form__label">
                          <input className="contact-form__input" type="text" placeholder="Name"/>
                          <span className="contact-form__span"></span>
                        </label>
                        
                        <label className="contact-form__label">
                          <input className="contact-form__input" type="mail" placeholder="Email"/>
                          <span className="contact-form__span"></span>
                        </label>

                        <label className="contact-form__label">
                          <textarea className="contact-form__textarea" placeholder="Text"></textarea>
                          <span className="contact-form__span"></span>
                        </label>
                    </form>

                    <div className="contact__block">
                        <button className="contact__chat">Open chat</button>
                        <button className="contact__submit">Submit</button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default MainPage;