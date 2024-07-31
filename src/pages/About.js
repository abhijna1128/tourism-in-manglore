import React, { useState, useEffect } from "react";
// import image from '../image/puritemple.jpg'
import smll from '../image/mangalorelogo.png'
import adyar from '../image/adyarfalls.jpg'
import adyarview from '../image/adyarviewpoint.jpg'
import suratkal from '../image/beach.jpg'
import bejai from '../image/bejai.jpg'
import park from '../image/butterfly.png'
import city from '../image/CityCentre.JPG';
import kadri from '../image/kadri1.jpg';
import kateel from '../image/kateel.JPG';
import kudroli from '../image/kudroli.jpg';
import mangaladevi from '../image/mangaladevi.jpg';
import kodical from '../image/mangaluru.jpg';
import arbi from '../image/mangfall.jpg';
import milagres from '../image/milagres.jpg';
import panambur from '../image/panambur.jpg';
import pilikula from '../image/pilikula.jpg';
import sulthan from '../image/Sultanbattery.JPG';
import tannirbhavi from '../image/tannirbhavi.jpg';
import thousand from '../image/thousand.jpg';
import { Slide } from "react-awesome-reveal";
import PulseLoader from "react-spinners/PulseLoader";



const About = () => {




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



  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);



  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color=" #fde02f" />
        </div>
      ) : (
        <>

          <>

            <button
              className={showButton ? "show" : ""}
              onClick={scrollToTop}
              id="button"
            >
            </button>
            <section className="banner2">
              {/* <img className="banner" src={image} alt /> */}
              <div className="banner-text-item">
                <Slide direction='down'>
                  <div className="banner-heading">
                    <h1>Explore The Beauty Of Mangaluru</h1>
                  </div>
                </Slide>
              </div>
            </section>
          </>
          <>
            <div className="container sectionabout p-2 " >
              <ol className="ccardds__container" title="Blog entries">
                <li className="ccardd">

                  <div className="ccardd__thumb">
                    <Slide direction='left'>
                      <img className="animate" src={adyar} alt='anugul' />
                    </Slide></div>

                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Adyar Falls</h3>
                      <p className="ccardd__text">Adyar Falls in Mangaluru is a hidden oasis nestled in the heart of the cities and towns of coastal Karnataka. One of the must-visit tourist attractions for travellers, Adyar Falls is a gorgeous oasis of serenity and beauty.  </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 1" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>

                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img className="animate" src={adyarview} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Adyar View Point </h3>
                      <p className="ccardd__text">This View Point in the Adyar village around 15 Kms from Mangaore offers a beautiful view. Greenery around and surrounded by coconut trees , the place a feast to your eyes.This is a must visit place in Mangalore </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about'/></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='left'>
                      <img className="animate" src={suratkal} alt='about'/></Slide></div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Suratkal Beach</h3>
                      <p className="ccardd__text">Surathkal Beach, located in the coastal city of Mangalore, is a true gem of natural beauty and tranquility. Nestled along the Arabian Sea, this picturesque beach has captivated locals and tourists alike with its pristine sand, crystal-clear waters, and stunning sunsets.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img className="animate" src={bejai} alt='about'/></Slide></div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Bejai</h3>
                      <p className="ccardd__text">Bejai is one of the major localities in Mangalore city, Karnataka, India. The series of Bharath malls, Bharath mall & Bharath mall 2 (under construction), are located here. It is one of the upscale & the busiest residential cum commercial localities of Mangalore.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='left'>
                      <img style={{ height: '370px' }} className="animate" src={park} alt='about'/></Slide></div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Sammilan Shetty's Butterfly Park</h3>
                      <p className="ccardd__text">Sammilan Shetty’s Butterfly Park was set up in the year 2011 by Sammilan Shetty, a young nature lover and butterfly enthusiast. Situated at Belvai, near Moodabidri at the foothills of the Western Ghats, the park is a treasure house of a wide variety of butterflies belonging to this region. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img className="animate" src={city} alt='about'/></Slide></div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">City Centre</h3>
                      <p className="ccardd__text">City Centre is the fifth largest mall in Karnataka and the second largest mall in Mangalore located at the K S Rao Road in Mangalore. It was opened to the public on April 25, 2010. It provides shopping, dining, entertainment and leisure activities.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='left'>
                      <img className="animate" src={kadri} alt='about'/></Slide></div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Kadri Shree Manjunatha Temple</h3>
                      <p className="ccardd__text">Kadri Shree Manjunatha Temple is an amazing Hindu temple located in Mangaluru, India. Established in the 10th or 11th century, the temple has stood the test of time and is still a prime destination for visitors today. It features bronze statues of gods and goddesses and hosts annual festivals, which are a treat for locals and visitors alike. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '400px' }} className="animate" src={kateel} alt='about'/></Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Kateelu Shri Durgaaparameshwari Temple </h3>
                      <p className="ccardd__text">The ancient Sri Durgaaparameshwari Temple, Kateel, Mangaluru is a revered religious site located close to the holy Nandin River. It is dedicated to the deity Durga Parameshwari and is known for its unique architectural style. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 4" href="#"><img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='left'>
                      <img className="animate" src={kudroli} alt='about'/></Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Kudroli Gokarnanatheshwara Temple </h3>
                      <p className="ccardd__text">Kudroli Shri Gokarnanatha Swami Temple, located in Mangaluru, is an ancient Hindu temple dedicated to Lord Shiva, popularly known as Gokarnanatheshwara. Built centuries ago, this beautiful temple is well-maintained and encircled by lush greenery. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 4" href="#"><img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img className="animate" src={mangaladevi} alt='about'/></Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Mahatobhara Shri Mangaladevi Temple</h3>
                      <p className="ccardd__text">Located in the delightful city of Mangaluru, Mahathobhara Sri Mangaladevi Temple is an exceptional Hindu temple steeped in history, charm and beauty. Built in the 9th century, the temple draws many devotees from all over the region and beyond, as it celebrates the divine glory of Goddess MangalaDevi.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 4" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={kodical} alt='about' />
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Kodical Beach</h3>
                      <p className="ccardd__text">Kodical Beach is one of the most serene and famous beaches in Mangalore. Watch the soothing sunset here or come down with your family to spend some quality time. This beach is a popular picnic spot in the city.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '440px' }} className="animate" src={arbi} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Arbi Falls

                      </h3>
                      <p className="ccardd__text">The breathtaking waterfall which is located close to Mangalore is the Bandaje Arbi Falls situated in the Western Ghats. Cascading from a height of 200ft., standing here one can take a glimpse of the Ballalarayana Durga from the top of the hill. Resting at a height of 700 ft. above sea level.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '400px' }} className="animate" src={milagres} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Milagres Chruch</h3>
                      <p className="ccardd__text">Milagres Church is a Roman Catholic church dedicated to Our Lady of Miracles, situated in the heart of Mangalore city. Established in the year 1680 by Bishop Thomas de Castro, it is one of the oldest churches in Dakshina Kannada. While the Church itself is a magnificent piece of art; there’s more to it than just that; it is a place where Mother Mary’s devotees come from far and near to venerate her. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '400px' }} className="animate" src={panambur} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Panambur Beach</h3>
                      <p className="ccardd__text">Panambur Beach is a stunning destination located in Mangaluru, Karnataka renowned for its expansive sandy shorelines and breathtakingly beautiful lighthouse overlooking the beach. It is a preferred and popular destination amongst tourists and travellers visiting the area, buzzing with activity and life round the clock.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about'/></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '400px' }} className="animate" src={pilikula} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Pilikula Nisargadhama</h3>
                      <p className="ccardd__text">Pilikula Nisargadhama, Mangaluru holds a great position when it comes to a stunning holiday destination for visitors looking for natural beauty, majestic sightseeing, recreational and educational activities. Comfortably located at a distance of 12 km from the city of Mangaluru, this picturesque abode serves as an ideal day outing spot for tourists of all ages offering a unique package of attractions such as an artisan village, lake, zoo, water park & botanical gardens.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '400px' }} className="animate" src={sulthan} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Sultan Bathery</h3>
                      <p className="ccardd__text"> Sultan Bathery, located in the coastal city of Mangaluru, is a popular tourist spot that has a lot of historical significance. Built in the 18th century, this watchtower located on the waterfront is known for its stunning views of the sun setting over the horizon. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={tannirbhavi} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Tannirbhavi Beach</h3>
                      <p className="ccardd__text">Tannirbhavi Beach, located in Mangaluru in Karnataka, is an indescribably beautiful beach. It is one of the most serene and tranquil beaches in the region with its unspoilt charm and sheer magnificence. The large sandy beach is connected to the mainland via a bridge and ferry which makes it very easily accessible for visitors.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about'/></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={thousand} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Thousand Pillar Temple</h3>
                      <p className="ccardd__text">Saavira Kambada Basadi (or Thousand Pillars Temple) is a temple in Moodbidri. It’s a 15th-century Jain temple, one of the finest in the region. Jain Tirthankara Chandranatha is the main deity of Moodbidri Jain Temple. Thus, it’s also called Chandranatha Basadi.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                {/*<li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Malkangiri} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Malkangiri</h3>
                      <p className="ccardd__text">Local legend claims Valmiki wrote the Ramayana on the banks of the Tamasa river. The region was known as Malyavantagiri in the Ramayana, and it was believed Sitakunda was the bathing-place of Sita, near Mudulipada. Local legend claims the Pandavas spent a year in exile in the dense forests of Malkangiri.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Mayurbhanj} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Mayurbhanj</h3>
                      <p className="ccardd__text">Mayurbhanj district is one of the 30 districts in the Odisha state of eastern India. It holds the distinction of being the largest district in Odisha by area.[3] The district's headquarters is located in Baripada, with other major towns including Rairangpur, Karanjia, and Bahalda. As of 2011, Mayurbhanj ranks as the third-most populous district in Odisha, following Ganjam and Cuttack.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Nabarangpur} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Nabarangpur</h3>
                      <p className="ccardd__text">Balangir District, also called Bolangir District, is a district situatNabarangpur district, also known as Nabarangapur district or Nawarangpur district, is a district of Odisha, India. The city of Nabarangpur is the district capital. Most of its population is tribal and the land is heavily forested. It borders Kalahandi and Koraput districts. Nabarangpur district is situated at 19.14′ latitude and 82.32′ longitude at an average elevation of 572 metres (1,877 ft). </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img className="animate" src={Nayagarh} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Nayagarh</h3>
                      <p className="ccardd__text">Nayagarh district is one of the 30 districts of Odisha state in eastern India. It was created in 1st April 1993[2] when the erstwhile Puri District was split into three distinct districts, namely Khordha, Nayagarh and Puri. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Nuapada} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Nuapada</h3>
                      <p className="ccardd__text">Nuapada district is an area of Odisha state in India. Nuapada town is the headquarters of the district. It has one subdivision: Nuapada, and five blocks: Khariar, Sinapali, Boden, Komna, and Nuapada. Nuapada District has three Notified Area Councils: Khariar, Khariar Road, and Nuapada, six tehsils and more villages such as Gandabahali, Tukla, Hatibandha, Duajher, Bargaon, Tarbod, Udyanbandh, and Larka. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about'/></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Puri} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Puri</h3>
                      <p className="ccardd__text">Puri district is a coastal district of the Odisha state of India. It has one sub-division, 11 tahasils and 11 blocks and comprises 1722 revenue villages. Puri is the only municipality of the district. Konark, Pipili, Satyabadi, Gop, Kakatpur and Nimapada are the NACs in this district while Brahmagiri being a semi-urban town.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Rayagada} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Rayagada</h3>
                      <p className="ccardd__text">
                        Rayagada district is a district in southern Odisha, a state in India, which became a separate district in October 1992. Its population consists mainly of tribes, primarily the Khonds and the Soras. In addition to Odia, Kui and Sora are spoken by the district's indigenous population. It was founded by Maharajah Biswanatha Deba Gajapati of the Surjyabansha dynasty of Jeypore. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Sambalpur} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Sambalpur</h3>
                      <p className="ccardd__text">Sambalpur District is a district in the western part of state of Odisha, India. The historic city of Sambalpur is the district headquarters.

                        The district is located in the Mahanadi River basin. It has a total area of 6,702 km2 (2,588 sq mi), of which almost 60% of the district is covered in dense forest. The district is bounded by Deogarh District to the east, Bargarh and Jharsuguda districts to the west, Sundergarh District to the north, and Subarnapur and Angul districts in the south.</p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Subarnapur} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Subarnapur</h3>
                      <p className="ccardd__text">Subarnapur District, also called Sonepur District or Sonapur District, is an administrative district in Odisha state in eastern India. The town of Sonepur is the district headquarters. Sonepur is known as the Mandiramalini town (city of temples) of Odisha with more than hundred temples. The people of the Sonepur region are referred to as Sonepuria. </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>
                <li className="ccardd">
                  <div className="ccardd__thumb">
                    <Slide direction='right'>
                      <img style={{ height: '500px' }} className="animate" src={Sundergarh} alt='about'/>
                    </Slide>
                  </div>
                  <div className="ccardd__content">
                    <Slide direction='down'>
                      <h3 className="ccardd__title">Sundergarh</h3>
                      <p className="ccardd__text">Sundargarh district is bounded by Raigarh district of Chhattisgarh in the west, Jashpur district of Chhattisgarh in the North-West, Simdega district of Jharkhand in the North, West Singhbhum district of Jharkhand and Keonjhar district of Odisha in the east and Jharsuguda, Sambalpur, Deogarh and Angul districts of Odisha in the South.  </p>
                    </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
                      <img src={smll} alt='about' /></a>
                  </div>
                </li>*/}
              </ol>
            </div>

          </>
        </>
      )}
    </div>
  )
}

export default About