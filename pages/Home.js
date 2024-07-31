import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import mang1 from "../image/mangaluru.jpg";
import mang2 from "../image/mangfall.jpg";
import mang3 from "../image/beach.jpg";
import mang4 from "../image/banner4.jpeg";
import mang5 from "../image/pilikula.jpg";
import guideimage from "../image/guide.png";
import trust from "../image/NicePng_travel-logo-png_3200042.png";
import travel from "../image/Travel-PNG-Image-HD.png";
import travelhappy from "../image/clipart4216475.png";
import mangshapng from "../image/logo1.jpg";
import mangtourism from "../image/MangTourism.jpg";

import puri from "../image/butterfly.png";
import mangaladevi from "../image/mangaladevi.jpg";
import adyar from "../image/adyarviewpoint.jpg";
import sulthan from "../image/Sultanbattery.JPG";




import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import location from '../image/location.gif';
import review from '../image/Review.gif';
import owner from '../image/owner.gif';


import { PulseLoader } from 'react-spinners';

// import LoginModal from './LoginModal';


const Home = () => {

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);





  // card  convert to background image
  const activate = (e) => {
    const sliderss = document.querySelector(".sliderss");
    const item1s = document.querySelectorAll(".item1");
    if (e.target.matches(".next")) sliderss.append(item1s[0]);
    if (e.target.matches(".prev")) sliderss.prepend(item1s[item1s.length - 1]);
  };


  // 


  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };





  // card slider

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };



  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }




  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
        <>
          {/* <LoginModal/> */}
          <>
            <button
              className={showButton ? "show" : ""}
              onClick={scrollToTop}
              id="button"
            >
            </button>
            {/* <section className="banner">
          <div className="banner-text-item">
            <div className="banner-heading">
              <h1>Explore The Beauty Of Odisha</h1>
            </div>
            <form className="form">
              <input
                type="text"
                list="mylist"
                placeholder="Where would you like to go?"
              />
              <datalist id="mylist">
                <option>London</option>
                <option>Canada</option>
                <option>Monaco</option>
                <option>France</option>
                <option>Japan</option>
                <option>Switzerland</option>
                <option>Seoul</option>
              </datalist>
              <input type="date" className="date" />
              <Link to="#" className="book">
                book
              </Link>
            </form>
          </div>
        </section> */}

            <div>
              <section id='carousel1'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={3000}>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={mang1} className="d-block w-100" style={{ height: '85vh', opacity: '999' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Namma Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit 
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={mang2} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Namma Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit 
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={mangtourism} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty of Namma Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit 
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={mang3} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Namma Kudla </h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit 
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={mang4} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Namma Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={mang5} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Namma Kudla</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit 
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
              </section>
            </div>

            <section id='carousel2' style={{ paddingTop: '40px' }}>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={3000}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={mang1} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Namma Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit 
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={mang2} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Namma Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit 
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={mangtourism} className="d-block w-100" style={{ height: '28vh' }} alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Namma Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit 
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={mang3} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Namma Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit 
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={mang4} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Namma Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit 
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={mang5} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Namma Kudla</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit 
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </section>
          </>

          <>
            <div className="section-head text-center p-t80" >
              <h3 className='h3style' data-title="Travel With Us">Travel With Us</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container responiveheading" style={{ backgroundColor: '#fff' }}>
              <h3 class="head3 spacing secondary-color text-center text-uppercase p-t80"  >
                Travel With Us
              </h3>
              {/* <h2 class=" head2 spacing secondary-color text-center text-uppercase" style={{top:'150px', position:'relative' }} >
            Visit The Best Places Ever
          </h2> */}
            </div>
            <section className="py-4 services" style={{ backgroundColor: '#fff' }}>
              <div className="container">
                {/* <h1>Tourism</h1> */}
                <div className="">
                  <Slider {...settings1}>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={guideimage} alt='section2' />
                        {/* <h2>8000+ Our Local Guides</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={trust} style={{ width: "120px" }} alt='section2' />
                        {/* <h2>100% Trusted Tour Agency</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={travel} style={{ width: "140px" }} alt='section2' />
                        {/* <h2>28+ Years of Travel Experience</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={travelhappy} alt='section2' />
                        {/* <h2>98% Our Travelers are Happy</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={mangshapng} alt='section2' />
                        {/* <h2>98% Our Travelers are Happy</h2> */}
                      </div>
                    </div>
                    {/* <div className="m-1">
                  <div className="partner-list">
                    <img
                      src={homePage?.imagepath + items.image}
                      className="img-fluid"
                    />
                  </div>
                </div> */}
                  </Slider>


                </div>
              </div>
            </section>

          </>

          {/* card section */}

          <>
            <div className="section-head text-center p-t80">
              <h3 className='h3style' data-title=" Tourist Places">Top 8 City</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container-fluid responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Top 8 City
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Tourist Places
              </h2>
            </div>

            <main className="page-contents">
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Kadri Manjunath Temple</h2>
                  <p className="copy">

                  </p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Milagres Chruch</h2>
                  <p className="copy">
                    Admire the Rich Architecture
                  </p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Panambur Beach</h2>
                  <p className="copy">
                    Seaside Serenity
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Mangaladevi Temple</h2>
                  <p className="copy">
                    Unique Temple
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Kateel Temple</h2>
                  <p className="copy">
                    Holiest temple
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Pilikula Nisargadhama</h2>
                  <p className="copy">
                    For A Glance At The Famous Animals
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title"> City Centre</h2>
                  <p className="copy">
                    Second largest mall in the city
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title"> Thousand Pillar Temple</h2>
                  <p className="copy">
                  Beautifully carved pillars
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
            </main>
          </>
       
          <>
            <div className="section-head text-center p-t80" style={{ paddingBottom: '30px' }}>
              <h3 className='h3style' data-title=" Most Demanded Places">Have A Glance</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container p-t80 responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Most Demanded Places
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Have A Glance
              </h2>
            </div>
            <div className="container first-section">
              <main className="section1">
                <ul className="sliderss">
                  <li className="item1 firstimg">
                    <div className="content1">
                      <h2 className="title"> Kudroli Gokarnath Temple</h2>
                      <p className="description">
                        {" "}
                        This is the centre of attraction during the Mangaluru Dasara celebration. The Gokarnanatheshwara Temple, otherwise known as Kudroli Sri Gokarnanatha Kshetra, is in the Kudroli area of Mangalore in Karnataka, India. It was consecrated by Narayana Guru. It is dedicated to Gokarnanatha, a form of Lord Shiva.
                        {" "}
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  {/* Repeat the rest of the list items similarly */}
                  <li className="item1 fourthimg">
                    <div className="content1">
                      <h2 className="title"> Tannirbhavi Beach</h2>
                      <p className="description">
                        {" "}
                        <p>Tannirbhavi beach is a beach in Mangalore, Karnataka, India. It is one of the most popular tourist destinations in coastal Karnataka. Along with the beach, Sultan Battery, Tannirbavi Tree Park & the proposed Marine museum are also the tourist attractions. It can be reached either by land near Kuloor Bridge or by ferry via Gurupura river from Sultan Battery. </p>
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 thirdimg">
                    <div className="content1">
                      <h2 className="title"> Sultan Battery</h2>
                      <p className="description">
                        {" "}
                        The Sultan Bateri watch tower, constructed in 1784 by Tipu Sultan is in Boloor, 4 km from the centre of Mangalore city, the chief port city in the state of Karnataka, India.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 secondimg">
                    <div className="content1">
                      <h2 className="title">Adyar Falls</h2>
                      <p className="description">
                      The waterfall looks great with greenery tress and fresh air. It is good place to visit one day picnic with family and children.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 fivthimg">
                    <div className="content1">
                      <h2 className="title"> Kadri Temple</h2>
                      <p className="description">
                      Kadri Manjunatha Temple is a historic temple in Mangalore in the state of Karnataka, India. The incharge and priests in the temple are Shivalli Madhva Brahmins.

                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 sixthimg">
                    <div className="content1">
                      <h2 className="title">Bejai museum</h2>
                      <p className="description">
                        {" "}
                        The Srimanthi Bai Government Museum or the Bejai Museum is located in the heart of the city and is also Mangalore's only museum. It has a collection of ancient coins, paintings, statues and inscriptions which display the rich heritage of India.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                </ul>
                <nav className="navstyle">
                  <button className="custom-btn1 prev" onClick={activate}>
                    &#8249;
                  </button>
                  <button className="custom-btn1 next" onClick={activate}>
                    &#8250;
                  </button>
                </nav>
              </main>
            </div>
          </>

          <>


            {/* <section id="slideshow" >
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow">
                          <img src={Balasore} /></figure>
                        <figure class="shadow">
                          <img src={Chandipur} /></figure>
                        <figure class="shadow">
                          <img src={Boudh} /></figure>
                        <figure class="shadow">
                          <img src={sambalpur} /></figure>
                        <figure class="shadow">
                          <img src={puri} />
                          </figure>
                        <figure class="shadow">
                          <img src={Balangir} /></figure>
                        <figure class="shadow">
                          <img src={ANUGUL} /></figure>
                        <figure class="shadow">
                          <img src={konark} /></figure>
                        <figure class="shadow">
                          <img src={bbsr} /></figure>
                    </div>
                </div>
                
            </section> */}

            <div className="section-head text-center p-t80 " style={{ paddingBottom: '30px' }} >
              <h3 className='h3style' data-title=" Our Customer in Mangaluru"> Our Customer in Mangaluru</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div className="container p-t80 responiveheading" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
              {/* <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Art& Architectures of
              </h3> */}
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Our Customer in Mangaluru
              </h2>
            </div>
            <div className="container gap-5 " style={{ display: 'flex', position: 'absolute', zIndex: '5', height: '78vh', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="section-content doodle">
                <div className="newsletter-section text-center text-white">
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', width: '95vw', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='left'>
                        <div className="counter-box">
                          <img src={location} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt='section2' />
                          <div className="counting counter text-black fs-1 fw-bold  " data-count={30}>30</div>
                          <p className='text-black fs-5'>Locations</p>
                        </div>
                      </Slide>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='down'>
                        <div className="counter-box">
                          <img src={review} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt='section2' />
                          <div className="counting counter text-black fs-1 fw-bold" data-count={1400}>14000</div>
                          <h5 className='text-black'>Reviews</h5>
                        </div>
                      </Slide>
                    </div>

                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='right'>
                        <div className="counter-box">
                          <img src={owner} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt='section2' />
                          <div className="counting counter text-black fs-1 fw-bold" data-count={40000}>40,000</div>
                          <h5 className='text-black'>Visiters</h5>
                        </div>
                      </Slide>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="doodle">
              <css-doodle style={{ position: 'absolute', display: 'flex', alignItems: 'center', }} >
                <style dangerouslySetInnerHTML={{ __html: "\n  --color: #51eaea, #fffde1, #ff9d76, #FB3569;\n\n  @grid: 30x1 / 100% 78vh / #270f34; \n  \n  :container {\n    perspective: 30vmin;\n    --deg: @p(-180deg, 180deg);\n  }\n  \n  :after, :before {\n    content: '';\n    background: @p(--color); \n    @place: @r(100%) @r(100%);\n    @size: @r(6px);\n    @shape: heart;\n  }\n\n  @place: center;\n  @size: 18vmin; \n\n  box-shadow: @m2(0 0 50px @p(--color));\n  background: @m100(\n    radial-gradient(@p(--color) 50%, transparent 0) \n    @r(-20%, 120%) @r(-20%, 100%) / 1px 1px\n    no-repeat\n  );\n\n  will-change: transform, opacity;\n  animation: scale-up 26s linear infinite;\n  animation-delay: calc(-12s / @I * @i);\n\n  @keyframes scale-up {\n    0%, 95.01%, 100% {\n      transform: translateZ(0) rotate(0);\n      opacity: 0;\n    }\n    10% { \n      opacity: 1; \n    }\n    95% {\n      transform: \n        translateZ(35vmin) rotateZ(var(--deg));\n    }\n  }\n" }} />
              </css-doodle>
            </div>

            <div className='doodleimage'>

              {/* <div class="row" >
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


          
                  <div className="card  counter-box1">
                    <Slide direction='left'>
                      <img src={location} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold  " data-count={180}>180</div>
                        <p className='text-black fs-5'>Locations</p>
                      </div>
                    </Slide>
                  </div>


                </div>
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                  <div className="card  counter-box1">
                    <Slide direction='down'>
                      <img src={review} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={1400}>14000</div>
                        <h5 className='text-black'>Reviews</h5>
                      </div>
                    </Slide>
                  </div>


                </div>

                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                 
                  <div className="card  counter-box1">
                    <Slide direction='right'>
                      <img src={owner} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={40000}>40,000</div>
                        <h5 className='text-black'>Visiters</h5>
                      </div>
                    </Slide>
                  </div>


                </div>
              </div> */}

              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-90 " style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='left'>
                      <img src={location} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='right'>
                        <div className="counting counter text-black fs-1 fw-bold  text-center " data-count={30}>30</div>
                        <p className='text-black fs-5  text-center'>Locations</p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 " style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='right'>
                      <img src={review} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='left'>
                        <div className="counting counter text-black  text-center fs-1 fw-bold" data-count={1400}>14000</div>
                        <h5 className='text-black  text-center'>Reviews</h5>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90" style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='left'>
                      <img src={owner} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='right'>
                        <div className="counting counter text-black  text-center fs-1 fw-bold" data-count={40000}>40,000</div>
                        <h5 className='text-black text-center'>Visiters</h5>
                      </Slide>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </>
          <>
            <div className="section-head text-center  paddingchange">
              <h1 className='h3style' data-title="Most Loveble Places In Mangaluru">Most Loveble Places In Mangaluru</h1>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div className="container responiveheading  paddingchange" >
              <h2 class=" head2 spacing secondary-color text-center text-uppercase " style={{ paddingTop: "50px" }}>
                Most Loveble Places In Mangaluru
              </h2>
            </div>
            <div className='container'>
              <ul className="tabitem" id='tabitm'>
                <li className={activeTab === 0 ? 'actives' : ''} onClick={() => handleTabClick(0)} data-id="0">Sammilan Shetty's Butterfly Park</li>
                <li className={activeTab === 1 ? 'actives' : ''} onClick={() => handleTabClick(1)} data-id="1">Mangaladevi Temple </li>
                <li className={activeTab === 2 ? 'actives' : ''} onClick={() => handleTabClick(2)} data-id="2">Adyar view point</li>
                <li className={activeTab === 3 ? 'actives' : ''} onClick={() => handleTabClick(3)} data-id="3">Sultan Battery</li>
              </ul>
              <ul className="tabitemresponsive" id='tabitmresponsive'>
                <Slide direction='left'>
                  <li className={activeTab === 0 ? 'actives' : ''} onClick={() => handleTabClick(0)} data-id="0">Sammilan Shetty's Butterfly Park</li>
                  <li className={activeTab === 1 ? 'actives' : ''} onClick={() => handleTabClick(1)} data-id="1">Mangaladevi Temple </li>
                </Slide>
                <Slide direction='right'>
                  <li className={activeTab === 2 ? 'actives' : ''} onClick={() => handleTabClick(2)} data-id="2">Adyar view point</li>
                  <li className={activeTab === 3 ? 'actives' : ''} onClick={() => handleTabClick(3)} data-id="3">Sultan Battery</li>
                </Slide>
              </ul>
            </div>
            <div className='container'>
              <div className="contentstyle">
                <div className={`box ${activeTab === 0 ? 'show' : 'hide'}`} data-content="0">
                  <div class="row">
                    <div class="col-md-6"><img src={puri} alt="" /></div>
                    <div class="col-md-6">   <div>
                      <h3>Sammilan Shetty's Butterfly Park</h3>
                      <p>
                      Nestled in the verdant landscape of the coastal city of Mangalore (Mangaluru) in Karnataka, India, Sammilan Shetty's Butterfly Park is a vibrant eco-tourism spot dedicated to the conservation of butterflies. This park, established in the Belvai village, offers a unique experience for nature lovers and entomology enthusiasts alike.
                      </p>
                      <h3>HISTORY</h3>
                      <p>The butterfly park was conceived and brought to life by a local nature enthusiast, Sammilan Shetty, whose passion for butterflies transpired into the creation of this sanctuary in 2011. His personal interest and dedication led to the development of a habitat that supports the biology and life cycles of these exquisite creatures. The park officially opened to the public in August 2013 and has since become a haven for numerous species of butterflies, flowering plants, and lush foliage.
                      </p>
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 1 ? 'show' : 'hide'}`} data-content="1">
                  <div class="row">
                    <div class="col-md-6"> <img className='lin' src={mangaladevi} alt="" /></div>
                    <div class="col-md-6"><div className='ll'>
                      <h3>Mangaladevi Temple</h3>
                      <p>
                      The temple is built in Kerala style architecture, which is common in all temples in the South Indian state of Kerala and Western Ghats, with most of its structure made of wood
                      </p>
                      <h3>HISTORY</h3>
                      <p>The presiding deity, Mangaladevi in the central shrine is in a seated posture. There are shrines around the sanctum for other deities.In modern times, the temple is maintained and administered by trustees. The temple is open daily from 6 a.m. to 1 pm and 4 pm to 8:30 pm.</p>
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 2 ? 'show' : 'hide'}`} data-content="2">
                  <div class="row">
                    <div class="col-md-6"><img src={adyar} alt="" /></div>
                    <div class="col-md-6">  <div>
                      <h3>Adyar view point</h3>
                      <p>
                      Adyar is north-west of the Pavoor Uliya island, which it is connected to via a footbridge. The footbridge is closed during monsoon season. Other local sites of interest include the Adyar Falls, a series of waterfalls.

                      </p>
                      <h3>HISTORY</h3>
                      <p>The 520m Harekala-Adyar road bridge was completed in April 2023, connecting Adyar to Harekala on the south side of the Netravati River and providing a source of water supply to the Mangalore region.</p>

                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 3 ? 'show' : 'hide'}`} data-content="3">
                  <div class="row">
                    <div class="col-md-6"><img src={sulthan} alt="" /></div>
                    <div class="col-md-6"> <div>
                      <h3>Sultan Battery</h3>
                      <p>
                      Sultan Battery was built of black stones and constructed to obstruct war ships from entering the river which was the major route for English invasion but was then retrieved from English by Tipu Sultan. It was also used as a fort with mounting places for cannons to avoid Britishers to enter Mangalore by sea.
                      </p>
                      <h3>HISTORY</h3>
                      <p>
                      Boloor is known for the watch tower constructed in the era of the ruler Tipu Sultan such that now the area surrounding the decaying structure is its namesake. The watch tower was constructed 15 years before his death in 1784 A.D. The place was previously known as Sultan's Battery (see artillery battery).

                      </p>
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default Home;

