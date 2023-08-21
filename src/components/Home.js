import {useState} from "react";
const Home = () => {
  return (
    <>
      <header>
        <div class="header-top" id="#">
          <div class="container-md">
            <div class="d-md-flex justify-content-between">
              <div className="d-flex left">
                <div className="pe-3">
                  <i class="fas fa-envelope-square pe-2"></i> ayoon@gmail.com
                </div>

                <div className="pe-3">
                  <i class="fas fa-phone-square"></i> +971506817015
                </div>
                <div>
                  <i class="fas fa-phone-square"></i> +971558071641
                </div>
              </div>
              <div>
                <div id="google_translate_element"></div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar">
          <div class="logo ms-3 text-secondary">AYOON AL MANAMA</div>

          <ul class="nav-links me-2">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">
              &#9776;
            </label>

            <div class="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              <li class="services">
                <a href="#service">Services</a>
              </li>

              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <button className="btn theme me-5  border border-dark w-100">Book Now</button>
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <div class="slider mt-2">
        <div class="container">
          <div class="row">
            <div class="col-md-6  h-100 ">
              <div className="pt-md-1">
                <h1>Professional Cleaning Services</h1>
              </div>

              <p className="pt-md-3 fs-5">
                Get reliable and professional cleaning services from our trained experts. We offer
                customized solutions tailored to your needs and use high-quality products and
                equipment. Whether you need a one-time deep clean or regular services, we've got you
                covered with flexible scheduling options. Book now and experience the difference.
              </p>
              <div className="m-auto d-md-lex justify-content-around">
                <div>
                  <button className="btn theme me-5  w-100 mt-2 fs-4">Book Now</button>
                </div>
                <div>
                  <button class="btn theme mt-3  w-100 fs-4">Contact Us</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="assets/images/cleaning.png" className="image img img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section class="with-medical" id="about">
        <div class="container">
          <div className="mb-4">
            <h2 className="text-center mb-4 theme2">About Us</h2>
            <p className="fs-5">
              We are a cleaning company based in the UAE, founded in 2000 . Our team consists of
              environmentally conscious individuals with a common goal: to provide friendly,
              effective, and affordable cleaning solutions for both commercial offices and homes. We
              keep up with the latest business practices, methods, equipment, and cleaning services.
              We pay close attention to every detail of cleaning. We offer one-time as well as
              regular cleaning services tailored to each client's needs. Our commitment is strong as
              we aim to deliver high-quality service that goes beyond what our clients expect. Our
              dedicated and motivated team ensures clients receive the best possible service. Our
              experienced staff, who are our most valuable asset, guide clients in choosing the
              right cleaning materials, equipment, and programs to meet their needs.
            </p>
          </div>
          <div class="row">
            <div class="row">
              <div className="col-md-6 d-flex justify-content-center">
                <img src="assets/images/aboutUs.png" className=" img img-fluid" alt="" />
              </div>

              <div className="col-md-6 mt-4">
                <h4 className="fw-bold fs-3 theme2">
                  Why choose us ? <br />
                </h4>

                <ul className="fs-5">
                  <li className="my-5">
                    <i class="fa fa-check"></i> Skilled Professionals
                  </li>
                  <li className="mb-5">
                    <i class="fa fa-check"></i> Timely and Reliable
                  </li>
                  <li className="mb-5">
                    <i class="fa fa-check"></i> Transparent Pricing
                  </li>
                  <li className="mb-5">
                    <i class="fa fa-check"></i> Easy Booking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="latest-features" id="service">
        <div class="container">
          <div class="inner-title">
            <h2> Latest Features & Services</h2>
            <p>Take a look at some of latest features and services provided by our team</p>
          </div>

          <div class="row m-auto">
            <div class="col-md-4 col-sm-6">
              <div class="single-feature">
                <img src="assets/images/services/clean1.jpg" alt="" />
                <div class="bn-dgt">
                  <i class="fas fa-hospital-alt"></i>
                  <h5>Home Cleaning</h5>
                  <p>
                    High Performanc Lorem ipsum dolor sit amet, consectetur adipiscing consectetur
                    adipiscing elit. Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-feature">
                <img src="assets/images/services/clean2.jpg" alt="" />
                <div class="bn-dgt">
                  <i class="fas fa-user-md"></i>
                  <h5>Office Cleaning</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit
                    amet, consectetur ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-feature">
                <img src="assets/images/services/clean3.jpg" alt="" />
                <div class="bn-dgt">
                  <i class="fas fa-briefcase-medical"></i>
                  <h5>Hospit Cleaning</h5>
                  <p>
                    {" "}
                    Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-feature">
                <img src="assets/images/services/clean1.jpg" alt="" />
                <div class="bn-dgt">
                  <i class="fas fa-hospital-alt"></i>
                  <h5>Home Cleaning</h5>
                  <p>
                    High Performanc Lorem ipsum dolor sit amet, consectetur adipiscing consectetur
                    adipiscing elit. Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-feature">
                <img src="assets/images/services/clean2.jpg" alt="" />
                <div class="bn-dgt">
                  <i class="fas fa-user-md"></i>
                  <h5>Office Cleaning</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit
                    amet, consectetur ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-feature">
                <img src="assets/images/services/clean3.jpg" alt="" />
                <div class="bn-dgt">
                  <i class="fas fa-briefcase-medical"></i>
                  <h5>Hospit Cleaning</h5>
                  <p>
                    Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec ut erat nec leo lobortis blandit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="copy">
        <div class="container d-flex justify-content-between">
          <div className="me-1">
            <a href="https://www.smarteyeapps.com/">2023 &copy; All Rights Reserved</a>
          </div>

          <div className="d-flex ">
            <div className="me-2">+971506817015</div>

            <div>+971558071641</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
