import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const adTag1 = `
  <script type="text/javascript">
	atOptions = {
		'key' : '079f1d312e13c2af71863dd86cf10f9f',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.variouscreativeformats.com/079f1d312e13c2af71863dd86cf10f9f/invoke.js"></scr' + 'ipt>');
</script>`;

  const adTag2 = `
  <script type="text/javascript">
	atOptions = {
		'key' : 'c8d85de158868f785685951a89091f99',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.variouscreativeformats.com/c8d85de158868f785685951a89091f99/invoke.js"></scr' + 'ipt>');
</script>`;

  const adTag3 = `
  <script type="text/javascript">
	atOptions = {
		'key' : '73a157a175ae5267e4e9a8cb11205198',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.variouscreativeformats.com/73a157a175ae5267e4e9a8cb11205198/invoke.js"></scr' + 'ipt>');
</script>`;

  const adTag4 = `
  <script type='text/javascript'
  src='//pl16427798.alternativecpmgate.com/c4/d0/12/c4d012cc660791bbbbe67f1e62eead36.js'>
  </script>`;

  return (
    <>
      <header id="home" className="header-area">
        <div className="navigation fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img src="/images/logo.png" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#service">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#work">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div id="parallax" className="header-content d-flex align-items-center">
          <div className="header-shape shape-one layer" data-depth="0.10">
            <img src="/images/banner/shape/shape-1.png" alt="Shape" />
          </div>
          <div className="header-shape shape-tow layer" data-depth="0.30">
            <img src="/images/banner/shape/shape-2.png" alt="Shape" />
          </div>
          <div className="header-shape shape-three layer" data-depth="0.40">
            <img src="/images/banner/shape/shape-3.png" alt="Shape" />
          </div>
          <div className="header-shape shape-fore layer" data-depth="0.60">
            <img src="/images/banner/shape/shape-2.png" alt="Shape" />
          </div>
          <div className="header-shape shape-five layer" data-depth="0.20">
            <img src="/images/banner/shape/shape-1.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="header-content-right">
                  <h4 className="sub-title">Hello, I’m</h4>
                  <h1 className="title">Mark Parker</h1>
                  <p>A Freelance UI Designer & Web Developer</p>
                  <a className="main-btn" href="#work">
                    View my Work
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-xl-1">
                <div className="header-image d-none d-lg-block">
                  <div data-clickadilla-banner="2371"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-social">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-behance-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="ad-container-1">
        <div id="container-ab0e64c3328738a838f7a55a6089bc25"></div>
      </div>
      <section id="about" className="about-area pt-125 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">About Me</h2>
                <p>
                  Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                  tempus, nunc id efficitur sagittis, urna est ultricies eros,
                  ac porta sem turpis quis leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-50">
                <h5 className="about-title">Hi There! I am Mark Parker</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="clearfix">
                  <li>
                    <div className="single-info d-flex align-items-center">
                      <div className="info-icon">
                        <i className="lni-calendar"></i>
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Date of birth:</span> 8 June 1995
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info d-flex align-items-center">
                      <div className="info-icon">
                        <i className="lni-envelope"></i>
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Email:</span> parker@mysite.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info d-flex align-items-center">
                      <div className="info-icon">
                        <i className="lni-phone-handset"></i>
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Phone:</span> +1-202-555-0138
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info d-flex align-items-center">
                      <div className="info-icon">
                        <i className="lni-map-marker"></i>
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Location:</span> 4373, El Centro, CA
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="about-skills pt-25">
                <div className="skill-item mt-25">
                  <div className="skill-header">
                    <h6 className="skill-title">HTML</h6>
                    <div className="skill-percentage">
                      <div className="count-box counted">
                        <span className="counter">80</span>
                      </div>
                      %
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="80"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item mt-25">
                  <div className="skill-header">
                    <h6 className="skill-title">CSS</h6>
                    <div className="skill-percentage">
                      <div className="count-box counted">
                        <span className="counter">60</span>
                      </div>
                      %
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="60"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item mt-25">
                  <div className="skill-header">
                    <h6 className="skill-title">Photoshop</h6>
                    <div className="skill-percentage">
                      <div className="count-box counted">
                        <span className="counter">50</span>
                      </div>
                      %
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="50"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item mt-25">
                  <div className="skill-header">
                    <h6 className="skill-title">Sketch</h6>
                    <div className="skill-percentage">
                      <div className="count-box counted">
                        <span className="counter">90</span>
                      </div>
                      %
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="90"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service" className="services-area gray-bg pt-125 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="ad-container-2"
                dangerouslySetInnerHTML={{ __html: adTag1 }}
              />
              <div className="section-title text-center pb-30">
                <h2 className="title">My Services</h2>
                <p>
                  Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                  tempus, nunc id efficitur sagittis, urna est ultricies eros,
                  ac porta sem turpis quis leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-code-alt"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Web Design</a>
                  </h4>
                  <p>
                    Curabitur vitae magna felis. Nulla ac libero ornare,
                    vestibulum lacus quis blandit enimdicta sunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-color-pallet"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#contact">Graphic Design</a>
                  </h4>
                  <p>
                    Curabitur vitae magna felis. Nulla ac libero ornare,
                    vestibulum lacus quis blandit enimdicta sunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-mobile"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">App Design</a>
                  </h4>
                  <p>
                    Curabitur vitae magna felis. Nulla ac libero ornare,
                    vestibulum lacus quis blandit enimdicta sunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-vector"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Illustration Design</a>
                  </h4>
                  <p>
                    Curabitur vitae magna felis. Nulla ac libero ornare,
                    vestibulum lacus quis blandit enimdicta sunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-website"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Web Development</a>
                  </h4>
                  <p>
                    Curabitur vitae magna felis. Nulla ac libero ornare,
                    vestibulum lacus quis blandit enimdicta sunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-support"></i>
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Consultancy and Support</a>
                  </h4>
                  <p>
                    Curabitur vitae magna felis. Nulla ac libero ornare,
                    vestibulum lacus quis blandit enimdicta sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ad-container-3"
            dangerouslySetInnerHTML={{ __html: adTag2 }}
          />
        </div>
      </section>
      <section
        id="call-to-action"
        className="call-to-action pt-125 pb-130 bg_cover"
        style={{ backgroundImage: "url(/images/call-to-action.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="call-action-content text-center">
                <h2 className="action-title">Have any project on mind?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  nostrud.
                </p>
                <ul>
                  <li>
                    <a className="main-btn custom" href="#">
                      download cv
                    </a>
                  </li>
                  <li>
                    <a className="main-btn custom-2" href="#">
                      hire me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="work-area pt-125 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title pb-25">
                <h2 className="title">My Recent Works</h2>
                <p>
                  Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                  tempus, nunc id efficitur sagittis, urna est ultricies eros,
                  ac porta sem turpis quis leo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                <div className="work-image">
                  <img src="/images/work/w-1.jpg" alt="work" />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Product Design</h3>
                    <ul>
                      <li>
                        <a className="image-popup" href="/images/work/w-1.jpg">
                          <i className="lni-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                <div className="work-image">
                  <img src="/images/work/w-2.jpg" alt="work" />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Product Design</h3>
                    <ul>
                      <li>
                        <a className="image-popup" href="/images/work/w-2.jpg">
                          <i className="lni-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                <div className="work-image">
                  <img src="/images/work/w-3.jpg" alt="work" />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Product Design</h3>
                    <ul>
                      <li>
                        <a className="image-popup" href="/images/work/w-3.jpg">
                          <i className="lni-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                <div className="work-image">
                  <img src="/images/work/w-4.jpg" alt="work" />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Product Design</h3>
                    <ul>
                      <li>
                        <a className="image-popup" href="/images/work/w-4.jpg">
                          <i className="lni-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                <div className="work-image">
                  <img src="/images/work/w-5.jpg" alt="work" />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Product Design</h3>
                    <ul>
                      <li>
                        <a className="image-popup" href="/images/work/w-5.jpg">
                          <i className="lni-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                <div className="work-image">
                  <img src="/images/work/w-6.jpg" alt="work" />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Product Design</h3>
                    <ul>
                      <li>
                        <a className="image-popup" href="/images/work/w-6.jpg">
                          <i className="lni-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="work-more text-center mt-50">
                <a className="main-btn" href="#">
                  more works
                </a>
              </div>
              <div
                className="ad-container-4"
                dangerouslySetInnerHTML={{ __html: adTag3 }}
              />
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer-area">
        <div className="footer-widget pt-130 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="footer-content text-center">
                  <a href="index.html">
                    <img src="/images/logo-2.png" alt="Logo" />
                  </a>
                  <p className="mt-">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor inci- didunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text text-center pt-20">
                  <p>
                    Copyright © 2022. Template Crafted by{" "}
                    <a href="https://uideck.com" rel="nofollow">
                      UIdeck
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="ad-conatiner-5"
        dangerouslySetInnerHTML={{ __html: adTag4 }}
      />
      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>
    </>
  );
}
