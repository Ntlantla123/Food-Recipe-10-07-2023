import React, { useState } from 'react';
import './Landing.css';
import { NavLink } from 'react-router-dom';
import logoshesha from './images/logoshesha.png';
import differentfood from './images/differentfood.png';
import landingimg1 from './images/landingimg1.png';
import landingimg2 from './images/landingimg2.png';
import landingimg3 from './images/landingimg3.png';
import { FaTwitter, FaFacebook, FaInstagram, } from 'react-icons/fa';

export const Landing = () => {
    return (<>
        <div className="page">
            <img src={logoshesha} alt="logoshesha.png" style={{ position: "absolute", left: "2%", height: "120px", }} />

            <img src={differentfood} alt="differentfood.png" style={{ position: "absolute", left: "49%", top: "90px", }} />
            <h2 className="heading2">"A recipe has no <br />soul, you as the<br />cook must bring soul<br />to the recipe“-<br /><b>Thomas Keller</b></h2>
            <NavLink to="/Register"><button type="button" className="button2">Signup</button></NavLink>
            <NavLink to="/Login"><button type="button" className="button2" style={{ position: "relative", top: "70px", translate: "25px", }}>Login</button></NavLink>

            <h1 className="heading1">Let's Starting Cooking with Popular Recipes</h1>
            <hr style={{ position: "relative", top: "520px", height: "12px", }}></hr>
        </div>

        <img src={landingimg1} alt="landingimg1.png" style={{ position: "relative", left: "20%", top: "160px", borderRadius: "20px", boxShadow: "20px 20px 40px ", }} />
        <img src={landingimg2} alt="landingimg2.png" style={{ position: "relative", left: "50%", top: "160px", borderRadius: "20px", boxShadow: "20px 20px 40px ", }} />
        <img src={landingimg3} alt="landingimg3.png" style={{ position: "relative", left: "-5%", top: "290px", borderRadius: "20px", boxShadow: "20px 20px 40px ", }} />



        {/*Footer Section*/}
        <div className="footer_landing" style={{ position: "relative", left: "-1%", }}>
            <h3 style={{ position: "relative", top: "10px", left: "4%", color: "lightgrey", fontWeight: "700", }}>Thank You For Visting Our Website<br />{/*<span style={{color:"aqua",fontWeight:"700", fontSize:"30px",}}>Hope You Visit Again & Enjoy Our New Food</span>*/} </h3>
            <div className="landing_footer section_padding">
                <div className="landing_footer-links">
                    <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
                    <div className="landing_footer-links_div">

                        <a href="/Login">
                            <p>Home</p>
                        </a>
                        <a href="/Login">
                            <p>Lessons</p>
                        </a>
                        <a href="/Login">
                            <p>Recipes</p>
                        </a>
                        <a href="/Login">
                            <p>Categories</p>
                        </a>
                    </div>

                    <div className="landing_footer-links_div">
                        <a href="/Login">
                            <p>About Us</p>
                        </a>
                        <a href="/Login">
                            <p>Contact Us</p>
                        </a>
                    </div>

                    <div className="landing_footer-links_div">
                        <h4 style={{ position: "relative", left: "-40%", }}>Follow Us :</h4>
                        <div className="socialmedia" style={{ position: "relative", left: "-40%", }}>
                            <FaTwitter size={25} />
                            <FaFacebook size={25} />
                            <FaInstagram size={25} />
                        </div>
                    </div>
                </div>

                <hr></hr>

                <h6 style={{ color: "white", position: "relative", top: "20px", left: "18%", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
                <div className="landing_footer-below">
                    <div className="landing_footer-copyright">
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
