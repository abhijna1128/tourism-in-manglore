import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../image/room2.webp";
import img2 from "../image/room3.webp";
import img3 from "../image/room4.webp";
import img4 from "../image/room5.jpeg";
import img5 from "../image/room6.jpeg";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";
import { createBooking } from "../api/api.js";  // Import the API function

const Roombook = () => {
  const initialFormData = {
    name: "",
    checkIn: "",
    checkOut: "",
    noGuest: "",
    noRoom: "",
    mobileNumber: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isValidMobile, setIsValidMobile] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [loaderStatus, setLoaderStatus] = useState(false); // Define loaderStatus
  const [showButton, setShowButton] = useState(false); // Define showButton

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNumber") {
      const numericValue = value.replace(/\D/g, ''); // Remove non-digit characters
      setFormData({
        ...formData,
        [name]: numericValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidMobileNumber = /^[0-9]{10}$/.test(formData.mobileNumber);
    const isValidEmailAddress = /\S+@\S+\.\S+/.test(formData.email);
    const isCheckInDateValid = formData.checkIn !== "";
    const isCheckOutDateValid = formData.checkOut !== "" && formData.checkOut > formData.checkIn;

    setIsValidMobile(isValidMobileNumber);
    setIsValidEmail(isValidEmailAddress);

    if (isValidMobileNumber && isValidEmailAddress && isCheckInDateValid && isCheckOutDateValid) {
      try {
        await createBooking(formData);
        Swal.fire({
          title: 'Success!',
          text: 'Your room has been booked successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          setFormData(initialFormData);
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'There was an error booking your room. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } else {
      if (!isCheckInDateValid) {
        Swal.fire({
          title: 'Error!',
          text: 'Please select a valid check-in date.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else if (!isCheckOutDateValid) {
        Swal.fire({
          title: 'Error!',
          text: 'Please select a valid check-out date after the check-in date.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Please enter valid mobile number and email address.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showButton]);

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
        <>
          <button
            className={showButton ? "show" : ""}
            onClick={scrollToTop}
            id="button"
          >
          </button>
          <div className="landing-page ">
            <img className="Top_most" src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f4317cf1-564c-43a7-a40a-37e705efe473/89c15330-4099-4880-a6d2-0b15a547e71f?org_if_sml=1972044&force_format=original" alt="Landing" />
          </div>
          <div id="wrapper"></div>

          <div className="container">
            <div className="row" id="room-image ">
              <Slider {...settings1}>
                <div className="col-md-4">
                  <img id="room-image" src={img1} alt="Room " /></div>
                <div className="col-md-4">
                  <img id="room-image" src={img2} alt="Room " /></div>
                <div className="col-md-4">
                  <img id="room-image" src={img3} alt="Room " /></div>
                <div className="col-md-4">
                  <img id="room-image" src={img4} alt="Room " /></div>
                <div className="col-md-4">
                  <img id="room-image" src={img5} alt="Room " /></div>
              </Slider>
            </div>
          </div>
          <section id="booking-confirmation">
            <div className="booking-confirmation-text">
              <h1>Booking Confirmation</h1>
            </div>
          </section>
          <div>
            <div className="royal-suite">
              <h1>Royal Suite</h1>
            </div>
            <div id="a-i-text-container">
              <div id="a-i-text">Amenities &amp; Inclusions</div>
            </div>
            <div id="a-i-container">
              <div id="amenities-inclusions" className="rounded-box">
                <ul className="column">
                  <li> Private Entrance</li>
                  <li> Spacious Living Area</li>
                  <li>Limousine Service</li>
                  <li>In-Room Spa Services</li>
                </ul>
                <ul className="column">
                  <li>Exclusive Terrace or Balcony</li>
                  <li>Private Bar and Lounge</li>
                  <li>Walk-in Closet</li>
                  <li>State-of-the-Art Entertainment System</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-container1">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="price">
                      <i className="fa fa-user-circle-o" style={{ fontSize: 20, color: 'gold' }}>Name</i>
                    </label>
                    <input
                      type="text"
                      id="price"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="check-in">
                      <i className="fa fa-calendar" style={{ fontSize: 20, color: 'gold' }}>Check in</i>
                    </label>
                    <input
                      type="date"
                      id="check-in"
                      name="checkIn"
                      onChange={handleChange}
                      value={formData.checkIn}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="check-out">
                      <i className="fa fa-calendar" style={{ fontSize: 20, color: 'gold' }}>Check out</i>
                    </label>
                    <input
                      type="date"
                      id="check-out"
                      name="checkOut"
                      onChange={handleChange}
                      value={formData.checkOut}
                    />
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "30px" }}>
                  <div className="column">
                    <label htmlFor="no-guest">
                      <i className="fa fa-user-circle-o" style={{ fontSize: 20, color: 'gold' }}>No. of Guest</i>
                    </label>
                    <input
                      type="text"
                      id="no-guest"
                      name="noGuest"
                      onChange={handleChange}
                      value={formData.noGuest}
                    />
                  </div>
                  <div className="column">
                    <label htmlFor="no-room">
                      <i className="fa fa-bed" style={{ fontSize: 20, color: 'gold' }}>No. of Room</i>
                    </label>
                    <input
                      type="text"
                      id="no-room"
                      name="noRoom"
                      onChange={handleChange}
                      value={formData.noRoom}
                    />
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "30px" }}>
                  <div className="column">
                    <label htmlFor="mobile-number">
                      <i className="fa fa-phone" style={{ fontSize: 20, color: 'gold' }}>Mobile number</i>
                    </label>
                    <input
                      type="text"
                      id="mobile-number"
                      name="mobileNumber"
                      onChange={handleChange}
                      value={formData.mobileNumber}
                    />
                    {!isValidMobile && (
                      <p style={{ color: "red" }}>Please enter a valid 10-digit mobile number.</p>
                    )}
                  </div>
                  <div className="column">
                    <label htmlFor="email">
                      <i className="fa fa-envelope" style={{ fontSize: 20, color: 'gold' }}>Email</i>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    {!isValidEmail && (
                      <p style={{ color: "red" }}>Please enter a valid email address.</p>
                    )}
                  </div>
                </div>
                <div className="button-container">
                  <button className="booking-button" type="submit">
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Roombook;
