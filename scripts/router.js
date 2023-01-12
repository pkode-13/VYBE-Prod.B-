// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };

// const routes = {
//     "/": "/pages/main.html",
//     "/registration": "/pages/reg.html",
// };

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("root").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();

const data = [
  `
<link rel="stylesheet" href="/styles/index.css" />

<aside class="ham">
    <i class="fa-solid fa-x"></i>
    <img class="q-ham" src="assets/q-sign.png" />

    <div class="ham-elements">
        <a class="ham-link" href="#page-1">Home</a>
        <a class="ham-link" href="#how-it-works">How it works</a>
        <a class="ham-link" href="#about-vybe">About Vybe</a>
        <a class="ham-link" href="#testimonials">Testimonials</a>
        <a class="ham-link" href="#contact-us">Contact Us</a>

        <div class="aside-logos">
            <a href="https://www.facebook.com/qtanea/"><i class="fa-brands fa-2x fa-facebook"></i></a>
            <a href="https://www.instagram.com/qtaneasolutions"><i class="fa-brands fa-2x fa-instagram"></i></a>
            <a href="https://twitter.com/qtaneasolutions"><i class="fa-brands fa-2x fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/qtanea-solutions-pvt-ltd/"><i
                    class="fa-brands fa-2x fa-linkedin"></i></a>
        </div>
    </div>
</aside>

<header>
    <nav>
        <img class="q-sign" src="assets/q-sign.png" />
        <div class="nav-elements">
            <a class="scroll" href="#home">Home</a>
            <a class="scroll" href="#extra">How it works</a>
            <a class="scroll" href="#about">About Vybe</a>
            <a class="scroll" href="#testimonials">Testimonials</a>
            <a class="scroll" href="#contact-us">Contact Us</a>
        </div>

        <img class="menu-sign" src="assets/menu-logo.png" />
        <div class="nav-logos">
            <a href="https://www.facebook.com/qtanea/"><i class="fa-brands fa-2x fa-facebook"></i></a>
            <a href="https://www.instagram.com/qtaneasolutions"><i class="fa-brands fa-2x fa-instagram"></i></a>
            <a href="https://twitter.com/qtaneasolutions"><i class="fa-brands fa-2x fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/qtanea-solutions-pvt-ltd/"><i
                    class="fa-brands fa-2x fa-linkedin"></i></a>
        </div>
    </nav>
</header>

<main>
    <article id="page-1">
        <div id="home">
            <div class="home-title">
                <span>Needles will</span><span>Never</span><span>Sting Again!</span>
            </div>

            <div class="home-content">
                Pain-free procedures are now at your fingertips
            </div>
        </div>

        <img src="assets/hand.png" />
    </article>

    <a href="#contact-us" class="get-vybe">Get&nbsp;your&nbsp;VYBE!</a>
    <article id="extra" class="vybe-extra-one">
        Vybe, a DCGI grade vibrating kinetic anesthesia device, offers optimum
        relief during medical procedures.
    </article>

    <article class="page-2">
        <div id="how-it-works">
            <div class="hiw-title">How it works</div>

            <div class="hiw-content">
                Imagine, if nerves were a series of roads. The pain nerves are like
                bumpy by lanes while the vibrational nerves resemble the highway,
                where one can zip at a higher speed. This is what VYBE does:
            </div>

            <div class="hiw-bullets">
                <img src="assets/work-one.png" /><span>VYBE saturates the vibrational nerves and distracts the brain
                    from painful bylanes.</span><img src="assets/work-two.png" /><span>It's a path-breaking (literally)
                    technology that eases procedures
                    like Botox, fillers, PRP, lasers and every other procedure that
                    requires a prick of a needle, including vaccination pricks and
                    simple blood draws.</span>
            </div>
        </div>

        <div class="ear-band-group">
            <img class="ear-band" src="assets/ear-band.png" />
            <div class="circle"></div>
        </div>
    </article>

    <article id="about" class="page-3">
        <img class="mini-band" src="assets/mini-band.png" />
        <div id="about-vybe">
            <div class="feature">
                <img src="assets/grid-one.png" /><span>The device senses pressure and turns on automatically</span>
            </div>

            <div class="feature">
                <img src="assets/grid-two.png" /><span>It has a rechargeable lithium battery which lasts for 4
                    hours</span>
            </div>

            <div class="feature">
                <img src="assets/grid-three.png" /><span>The vibration frequencies are configured to activate the two
                    main
                    vibration receptors of the skin (Meissner's and Pacinian
                    Corpuscles)</span>
            </div>

            <div class="feature">
                <img src="assets/grid-four.png" /><span>Two-vibration touch points provide a wide and comprehensive
                    anaesthetic zone between the thumb and index finger of the
                    non-dominant hand, thus providing optimal pain reduction</span>
            </div>

            <div class="feature">
                <img src="assets/grid-five.png" /><span>A one-time investment, VYBE doesn't require any add-ons</span>
            </div>

            <div class="feature">
                <img src="assets/grid-six.png" /><span>Small contact points are designed to reach small areas like the
                    eyelids/lips</span>
            </div>
        </div>

        <img class="hand-band" src="assets/hand-band.png" />
        <div class="vybe-extra-two">
            VYBE cancels the need for an assistant to operate the device and
            synchronize their movement with that of the doctor
        </div>

        <img class="vybe-band" src="assets/vybe-band.png" />
        <img class="mini-vybe-band" src="assets/mini-vybe-band.png" />
    </article>

    <article class="page-4">
        <div class="vybe-data">
            <div class="vb-title">
                Our research has recorded a significant increase in follow-ups and
                the ability to conduct certain procedures without anaesthesia.
            </div>

            <div class="vb-grid">
                <div>
                    <div count-upto="95" class="vb-grid-item">95%</div>
                    <span>Patients who preferred VYBE over topical anaesthesia</span>
                </div>

                <div>
                    <div count-upto="70" class="vb-grid-item">70%</div>
                    <span>Reduction on average on the visual analogue scale</span>
                </div>

                <div>
                    <div count-upto="45" class="vb-grid-item">45%</div>
                    <span>Increase in follow-ups and referrals</span>
                </div>
            </div>

            <div id="testimonials">
                <div class="testimonial">
                    <div class="box left" id="1">
                        <img src="assets/doctor1.png" class="doctor-image" />
                        <div class="doctor-name">Dr. Prathamesh Gupta</div>

                        <div class="doctor-clinic">Marwah Skin Clinic</div>

                        <a href="https://www.instagram.com/guptaprathamesh" class="doctor-id">@guptaprathamesh</a>
                        <div class="doctor-remarks">
                            It's an innovative approach of using vibration therapy for
                            pain management, especially for injectable cosmetology
                            procedures. The automation of the device using touch sensors
                            is an amazing idea and the techie look of vybe adds flair to
                            the treatment. Honestly speaking, it doesn't require an effort
                            to get used to and becomes quite an extension of your
                            fingertips and works very very instinctively.
                        </div>

                        <div class="doctor-stars">
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                        </div>
                    </div>

                    <div class="box middle" id="2">
                        <img src="assets/doctor2.png" class="doctor-image" />
                        <div class="doctor-name">Dr. Preeti Kothari</div>

                        <div class="doctor-clinic">Skinerva Clinic, South Bombay</div>

                        <a href="https://www.instagram.com/drpreeti_thedermadoc"
                            class="doctor-id">@drpreeti_thedermadoc</a>
                        <div class="doctor-remarks">
                            Vybe is a novel instrument in pain management during
                            injectable cosmetology procedures. It greatly improves patient
                            satisfaction especially during procedures such as PRP and
                            Mesotherapy. The rate of follow-up has increased since the
                            introduction of the Vybe device into our practice.
                        </div>

                        <div class="doctor-stars">
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                        </div>
                    </div>

                    <div class="box right" id="3">
                        <img src="assets/doctor3.png" class="doctor-image" />
                        <div class="doctor-name">Dr. Manoj Ghoghare</div>

                        <div class="doctor-clinic">
                            Sai Sparsh Skin Clinic, Ahmednagar
                        </div>

                        <a href="https://www.instagram.com/sai_sparsh_aesthetics"
                            class="doctor-id">@sai_sparsh_aesthetics</a>
                        <div class="doctor-remarks">
                            Vybe really does take the pain away, making painful procedures
                            like PRP and Mesotherapy not just bearable, but also a
                            pleasant experience! Moreover, Vybe has as sleek, ergonomic
                            design and it got incorporated into my everyday procedures in
                            a seamless manner.
                        </div>

                        <div class="doctor-stars">
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                            <img src="assets/star.png" \ />
                        </div>
                    </div>

                    <i id="move-left" class="fa-solid fa-3x fa-angle-left"></i><i id="move-right"
                        class="fa-solid fa-3x fa-angle-right"></i>
                </div>
            </div>
        </div>
    </article>

    <article id="contact-us">
        <div class="contact-form">
            <form id="sheetdb-form-1" action="https://sheetdb.io/api/v1/qo9ygznctwysy" method="post">
                <input autocomplete="off" required title="Enter your name here." type="text" placeholder="NAME"
                    class="form-input" name="data[name]" />
                <input autocomplete="off" required title="Enter your number here." type="text" placeholder="PHONE"
                    class="form-input" name="data[phone]" />
                <input autocomplete="off" required title="Enter your city here." type="text" placeholder="CITY"
                    class="form-input" name="data[city]" />
                <input autocomplete="off" required title="Enter your email here." type="text" placeholder="EMAIL"
                    class="form-input" name="data[email]" />
                <div>
                    <input type="submit" value="Submit" class="input-btn" />
                    <input type="reset" value="Clear" class="input-btn" />
                </div>
            </form>

            <div class="form-2">
                <div class="contact-form-title">
                    Thank you for reaching out.<br /><i>We'll VYBE for sure.</i>
                </div>

                <div class="contact-form-message">
                    We promise our sales team will reach out to you within 24 hours.
                </div>

                <div class="contact-form-content">
                    <a href="mailto:hello@qtanea.com" class="cfc-one">EMAIL: hello@qtanea.com</a>
                    <!-- <a href="tel:+919876543210" class="cfc-two">CALL: +91 98765 43210</a> -->
                </div>

                <div class="contact-form-extra">Thank you for your patience.</div>

                <div class="contact-form-logos">
                    <a href="https://www.facebook.com/qtanea/"><i class="fa-brands fa-2x fa-facebook"></i></a>
                    <a href="https://www.instagram.com/qtaneasolutions"><i class="fa-brands fa-2x fa-instagram"></i></a>
                    <a href="https://twitter.com/qtaneasolutions"><i class="fa-brands fa-2x fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/qtanea-solutions-pvt-ltd/"><i
                            class="fa-brands fa-2x fa-linkedin"></i></a>
                </div>
            </div>
        </div>

        <div class="contact-message">
            <span>We'll</span>
            <span>VYBE</span>
            <span>for</span>
            <span>sure</span>
        </div>
    </article>

    <footer>
        <span>Qtanea Solutions Pvt Ltd, Dr. D.Y. Patil Medical College, Pune</span>
        <img src="assets/footer-logo.png" />
        <span>Supported By</span>
        <div style="display: flex; gap: 2rem;">
            <img src="assets/sisfs.jpg" />
            <img src="assets/stp.jpg" />
        </div>
    </footer>
</main>
  `,
  `
<link rel="stylesheet" href="/styles/reg.css">

<div class="form_wrapper">
  <div class="form_main">
    <div class="form_header">
      <img class="q-logo" src="/assets/registration/q-logo.png" width="173" style="margin-bottom: 1rem;">
      <p class="form_title">We are so glad our<br>frequencies have matched!</p>
    </div>

    <p class="form_greet_1">We wish you</p>
    <p class="form_greet_2">Good VYBEs Only</p>
    <p class="form_greet_3">At Qtanea, improving the doctor-patient equation is our priority. <br>
      Your addition to our family matters!
    </p>

    <p class="form_prompt">Fill this form to register and avail your 6-month warranty.</p>

    <div class="form_body">
      <div class="title">Warranty Registration</div>
      <form id="sheetdb-form-2" action="https://sheetdb.io/api/v1/bpvlz1f1baze6" method="post">
        <div class="form_user">
          <div class="form_input">
            <label for="name" class="form_input_details">Full Name</label>
            <input required name="data[name]" type="text" placeholder="Rahul Gupta" id="name">
          </div>

          <div class="form_input">
            <label for="clinic" class="form_input_details">Clinic Name</label>
            <input required name="data[clinic]" type="text" placeholder="Kaya Clinic" id="clinic">
          </div>

          <div class="form_input">
            <label for="city" class="form_input_details">Your City</label>
            <input required name="data[city]" type="text" placeholder="New Delhi" id="city">
          </div>

          <div class="form_input">
            <label for="email" class="form_input_details">Email ID</label>
            <input required name="data[email]" type="email" placeholder="rahul.gup123@gmail.com" id="email">
          </div>

          <div class="form_input">
            <label for="phone" class="form_input_details">Mobile Number</label>
            <input required name="data[phone]" type="tel" pattern="[0-9]{10}" placeholder="9876543210" id="phone">
          </div>

          <div class="form_input">
            <label for="date" class="form_input_details">Date Of Purchase</label>
            <input required name="data[date]" type="date" placeholder="rahul.gup123@gmail.com" id="date">
          </div>
        </div>

        <div class="form_gender_details">
          <input type="radio" name="gender" id="male" name="data[male]">
          <input type="radio" name="gender" id="female" name="data[female]">
          <input type="radio" name="gender" id="others" name="data[others]">
          <span class=".form_gender_title">Gender (optional)</span>

          <div class="form_gender_category">
            <label for="male">
              <span class="dot one"></span>
              <span>Male</span>
            </label>

            <label for="female">
              <span class="dot two"></span>
              <span>Female</span>
            </label>

            <label for="others">
              <span class="dot three"></span>
              <span>Others</span>
            </label>
          </div>
        </div>

        <div class="button">
          <input type="submit" value="Register">
        </div>
      </form>
    </div>

    <p class="form_success">
      Thank you for joining this amazing family!
    </p>

    <p class="form_footer">Follow us on Instagram
      <a class="form_footer_link" href="https://www.instagram.com/qtaneasolutions">@qtaneasolutions</a>
      to get an additional three-month warranty
    </p>
  </div>
</div>
  `,
];

window.addEventListener("load", onChangeRoute);
window.addEventListener("hashchange", onChangeRoute);

function onChangeRoute() {
  const path = getPathFromHashRoute();
  const route = resolveRouteFromPath(path);
  route();
}

function draw(html) {
  document.body.innerHTML = html;
}

function homeHandler() {
  const scripts = document.getElementsByTagName("script");
  for (var i = scripts.length; i--; )
    if (scripts[i].hasAttribute("src")) {
      const arr = scripts[i].src.split("/");
      if (arr[arr.length - 1] == "index.js") scripts[i].remove();
      else if (arr[arr.length - 1] == "form.js") scripts[i].remove();
    }

  const content = data[0];
  draw(content);

  setTimeout(() => {
    const script1 = document.createElement("script");
    script1.setAttribute("src", "/scripts/form.js");
    script1.setAttribute("async", "");
    script1.setAttribute("defer", "");
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.setAttribute("src", "/scripts/index.js");
    script2.setAttribute("async", "");
    script2.setAttribute("defer", "");
    document.head.appendChild(script2);
  }, 1999);
}

function regHandler() {
  const scripts = document.getElementsByTagName("script");
  for (var i = scripts.length; i--; )
    if (scripts[i].hasAttribute("src")) {
      const arr = scripts[i].src.split("/");
      if (arr[arr.length - 1] == "form.js") scripts[i].remove();
    }

  const content = data[1];
  draw(content);

  setTimeout(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "/scripts/form.js");
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    document.head.appendChild(script);
  }, 1999);
}

const routes = [];

function registerRoute(path, callback) {
  routes[path] = callback;
}

registerRoute("/", homeHandler);
registerRoute("/registration", regHandler);

function resolveRouteFromPath(path) {
  const route = routes[path];
  if (!route) return routes["/"];
  return route;
}

function getPathFromHashRoute() {
  let hash = window.location.hash;
  if (!hash) return "/";
  return "/" + hash.substring(1);
}

// function scriptExists(url) {
//   const scripts = document.getElementsByTagName("script");

//   for (var i = scripts.length; i--; ) {
//     const arr = scripts[i].src.split("/");
//     if (arr[arr.length - 1] == url) return true;
//   }
//   return false;
// }
