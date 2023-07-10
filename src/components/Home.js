import React, { useRef,} from 'react';
import { TopNav } from './TopNav';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import 'swiper/swiper-bundle.min.css';
import { Carousel } from 'react-bootstrap';
import HomeCard from './HomeCard';
import { Button } from 'react-bootstrap';

//Import images
import logoshesha from './images/logoshesha.png';
import viewpancake2 from './images/viewpancake2.png';
import viewburger from './images/viewburger.png';
import shushi from './images/shushi.jpg';
import tandooriChicken from './images/tandooriChicken.jpg';
import butternutrisotto from './images/butternutrisotto.jpg';
import minestroneSoup from './images/minestroneSoup.jpg';
import chickenTetrazzini from './images/chickenTetrazzini.jpg';

export const Home = () => {
  //const recipeElRef = useRef();
  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();
  const shushiEl = useRef();
  const tandooriChickenEl = useRef();
  const butternutrisottoEl = useRef();
  const minestroneSoupEl = useRef();
  const chickenTetrazziniEl = useRef();

  return (<>

    <section>
      {/*Slider Images under NavBar section*/}
      <TopNav />
      <Carousel style={{ position: "relative", top: "0px", width: "125%", left: "0", }} >
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="images/food1.jpg" alt="First slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Weekend Favourites</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="images/food2.webp" alt="Second slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Family Dinner</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/food4.jpg" alt="Third slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Holiday Favourites</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/food5.jpg" alt="Third slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Dinner</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/food6.avif" alt="Third slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Family Day</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/*Card Image Section Started*/}
      <h1 className="text-center text-success my-5" style={{ position: "relative", left: "10%", top: "90px", fontWeight: "600", }}><i>Holidays Recipes</i></h1>
      <div className="container" style={{ position: "relative", top: "220px", left: "5%", }}>
        <div className="row">
          <div className="col-md-3">
            <div className="card" >
              <img src="images/4x4-Bread.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>4x4 Bread</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ borderRadius: "50px",backgroundColor: "green", }}>View Recipe</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" >
              <img src="images/pasta.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>Creamy Pasta & Tomato</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ borderRadius: "50px",backgroundColor: "green", }}>View Recipe</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="images/meatBalls.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>Meat Balls</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ borderRadius: "50px",backgroundColor: "green", }}>View Recipe</a>
              </div>
            </div>
          </div>

          

          <div className="col-md-3">
            <div className="card" >
              <img src="images/Taco.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600", }}>Carne Asada Tacos</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary" style={{ borderRadius: "50px",backgroundColor: "green", }}>View Recipe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Card Image Section*/}


      {/*<div className='home_header_left' style={{ marginRight: "auto" }}>
        <h1>Life is uncertain. Eat  first</h1>
        <p className="homeHeaderLeft_p3"> “ A recipe has no soul.<br />You as the cook must bring soul to the recipe”<br /><b>-Thomas Keller</b> </p>
      </div>

      <img src="images/swirlyArrow.png" style={{ position: "relative", left: "27%", top: "5px" }}></img><br />
      <button className="homeHeaderLeft_Button" onClick={function () { recipeElRef.current.click() }}>Explore Recipes <NavLink ref={recipeElRef} to="/Recomendations" hidden /></button>

      <img src={`images/homeHeaderRight.png`} style={{ position: "relative", height: "100%", width: "45%", left: "50%", top: "-350px", }} alt='' />

      <div className='home_header1'>
        <div className='home_header_right'>
          <img src={`images/homeHeader2.png`} style={{ position: "relative", left: "20%", height: "350px", top: "-290px", }} alt='' />
        </div>

        <div className='home_header_left'>
          <h1 style={{ position: "relative", left: "-45%", top: "-290px", }}>Create your own Recipe</h1>
          <h3 className="homeHeaderLeft_H3" style={{ position: "relative", left: "-45%", top: "-250px", fontWeight: "400", }}>
            Using the ingredients you have we can help you make a meal<br /><br />Porem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Nunc vulputate libero et velit<br /> interdum, ac aliquet odio mattis.
          </h3>
        </div>
  </div>*/}


      {/*Slider images section started*/}
      <h2 className="text-center text-success my-5" style={{ position: "relative", left: "10%", top: "280px", fontSize: "50px", }}><em>Enjoy Our Recipes</em></h2>
      <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "12%", top: "350px", }}>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
        >

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewpancake2, price: '10 mins', title: 'Pancake',  }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewburger, price: '35 mins', title: 'Burger' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: shushi, price: '15 mins', title: 'Shiki Shushi' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: tandooriChicken, price: '23 mins', title: 'Tandoori Chicken' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: butternutrisotto, price: '45 mins', title: 'Butternut Risotto' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: minestroneSoup, price: 'R45', title: 'Minestrone Soup' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: chickenTetrazzini, price: 'R10', title: 'Chicken Tetrazzini' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*End the slider images section*/}


{/*Slider Images under NavBar section*/}
<h2 className="text-center text-success my-5" style={{ position: "relative", left: "10%", top: "450px", fontSize: "50px", }}><em>BreakFast Ideas</em></h2>
      <Carousel style={{ position: "relative", top: "500px", left: "2%",width:"120%", }} >
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="images/eggs.jpg" alt="First slide" style={{ width: "100%",height:"90vh",}} />
          <Carousel.Caption>
            <h1>Eggs</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="images/oats.jpg" alt="Second slide" style={{ width: "100%",height:"90vh", }} />
          <Carousel.Caption>
          <h1>Oats BreakFast</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/greekyogurt.jpg" alt="Third slide" style={{ width: "100%",height:"90vh", }} />
          <Carousel.Caption>
          <h1>Greek Yogurt</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/salmon.jpg" alt="Third slide" style={{ width: "100%",height:"90vh", }} />
          <Carousel.Caption>
          <h1>Salmon Breakfast</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/avacodos.jpg" alt="Third slide" style={{ width: "100%",height:"90vh", }} />
          <Carousel.Caption>
          <h1>Avacado Breakfast</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


{/*Slider images section started*/}
{/*<h2 className="text-center text-success my-5" style={{ position: "relative", left: "10%", top: "280px", fontSize: "50px", }}><em>Enjoy Our Recipes</em></h2>*/}
      <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "12%", top: "650px", }}>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
        >

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewpancake2, price: '10 mins', title: 'Pancake',}} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewburger, price: '35 mins', title: 'Burger' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: shushi, price: '15 mins', title: 'Shiki Shushi' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: tandooriChicken, price: '23 mins', title: 'Tandoori Chicken' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: butternutrisotto, price: '45 mins', title: 'Butternut Risotto' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: minestroneSoup, price: 'R45', title: 'Minestrone Soup' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: chickenTetrazzini, price: 'R10', title: 'Chicken Tetrazzini' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*End the slider images section*/}

      {/*Footer Section Started*/}
      <div className="footer">
        {/*<h3 style={{ position: "relative", top: "10px", left: "4%", color: "lightgrey", fontWeight: "700", }}>Thank You For Visting Our Website<br /></h3>*/}
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
            <div className="sb_footer-links_div">
              <h3>Contact</h3>
              <a href="/Contact">
                <p style={{fontWeight:"600",}}><i>Linkedin</i></p>
              </a>
              <a href="/Lessons">
                <p style={{fontWeight:"600",}}><i>Facebook</i></p>
              </a>
              <a href="/Recipes">
                <p style={{fontWeight:"600",}}><i>GitHub</i></p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h3>Resources</h3>
              <a href="/Home">
               <a href="https://www.youtube.com/"> <p>Youtube</p></a>
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
    </section ></>
  )
}
