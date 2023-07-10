import React from 'react';
import { TopNav } from './TopNav';
import './Lesson.css';


import logoshesha from './images/logoshesha.png';

export const Lessons = () => {
  return (
    <React.Fragment>
      <TopNav />





      <section className="LessonsPage">


     
        {/*   <h4 style={{ position: 'relative', left: '12%', top: "10px", fontSize: "40px", }}>Popular Videos</h4>
                <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                    <div class="responsive">
                        <div className="LessonsItem">
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>
                </div>

            
                <div style={{ margin: '0px auto' }}>
                    <h1 style={{ marginTop: '15rem', textAlign: 'start', position: 'relative', left: '12%' }}>New Videos</h1>
                    <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                        <div class="responsive">
                            <div className="LessonsItem">
                             <img></img>
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem" >
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>
                    </div>

                    <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                        <div class="responsive">
                            <div className="LessonsItem">
                               
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem" >
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>
                    </div>
                    <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                        <div class="responsive">
                            <div className="LessonsItem">
                               
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem" >
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>
                    </div>
    </div>*/}



        {/*Card Image Section Started*/}
        <h1 className="text-center text-success my-5" style={{ position: "relative", left: "10%", top: "40px", fontWeight: "500", }}><i>More Related Recipes</i></h1>
        <div className="container" style={{ position: "relative", top: "120px", left: "5%", }}>
          <div className="row">
            <div className="col-md-3">
              <div className="card" >
                <img src="images/4x4-Bread.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>4x4 Bread</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "green", }}>View Recipe</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" >
                <img src="images/pasta.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>Creamy Pasta & Tomato</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "green", }}>View Recipe</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <img src="images/meatBalls.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>Meat Balls</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "green", }}>View Recipe</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" >
                <img src="images/Taco.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>Carne Asada Tacos</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "green", }}>View Recipe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Card Image Section*/}


        {/*Footer Section Started*/}
        <div className="footer" style={{ position: "relative", top: "250px", }}>
          {/*<h3 style={{ position: "relative", top: "10px", left: "4%", color: "lightgrey", fontWeight: "700", }}>Thank You For Visting Our Website<br /></h3>*/}
          <div className="sb_footer section_padding">
            <div className="sb_footer-links">
              <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
              <div className="sb_footer-links_div">
                <h3>Contact</h3>
                <a href="/Contact">
                  <p style={{ fontWeight: "600", }}><i>Linkedin</i></p>
                </a>
                <a href="/Lessons">
                  <p style={{ fontWeight: "600", }}><i>Facebook</i></p>
                </a>
                <a href="/Recipes">
                  <p style={{ fontWeight: "600", }}><i>GitHub</i></p>
                </a>
              </div>
              <div className="sb_footer-links_div">
                <h3>Resources</h3>
                <a href="/Home">
                  <p>Youtube</p>
                </a>
                <a href="/Recipes">
                  <p>Royco Website</p>
                </a>
                <a href="/Recipes">
                  <p>STV</p>
                </a>
              </div>

              <div className="sb_footer-links_div">
                <h3>Company</h3>
                <a href="/Home">
                  <p>Home</p>
                </a>
                <a href="/Lessons">
                  <p>Lessons</p>
                </a>
                <a href="/Recipes">
                  <p>Recipe</p>
                </a>
                <a href="/Categories">
                  <p>Categories</p>
                </a>
              </div>
              <div className="sb_footer-links_div">

              </div>
            </div>

            <hr></hr>

            <h6 style={{ color: "white", position: "relative", top: "20px", left: "18%", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>

                </p>
              </div>
            </div>
          </div>
        </div>
        {/*End the footer Section Started*/}

      </section>
    </React.Fragment>
  )
}
