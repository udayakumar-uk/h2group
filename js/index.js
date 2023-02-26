var header = function(){
    var pageHeader = `<header>
                        <div class="container">
                            <div class="header-section row py-2 align-items-center">
                                <div class="head-logo col-md-3 col-6">
                                    <a href="./" title="Logo" id="logo" class="text-decoration-none fs-5"> H2 GROUP </a> 
                                </div>
                                <nav class="head-nav col-md-6 col-6">
                                    <ul type="none" id="toggleMenu" class="d-flex justify-content-center">
                                        <li><a href="./" class="nav-link active">Solutions</a></li>
                                        <li><a href="#" class="nav-link">Industries <span class="material-symbols-rounded"> expand_more </span></a>
                                            <ul class="sub-menu">
                                                <li><a href="./reinsurance.html" class="sub-nav-link">Re/Insurance</a></li>
                                                <li><a href="./banking.html" class="sub-nav-link">Banking</a></li>
                                                <li><a href="./capitalmarket.html" class="sub-nav-link">Capital Markets</a></li>
                                                <li><a href="./technology.html" class="sub-nav-link">Technology</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./about.html" class="nav-link">About</a></li>
                                        <li><a href="./contact.html" class="nav-link">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>`;

    $('body').prepend(pageHeader);
}


var fooder = function(){
    var pageFooter = `<section class="pageScroll footer-section indicate-white flex-column align-items-center justify-content-around gap-5">
                        <div class="mail-section text-center">
                            <h3 class="title fs-1 text-white">STAY UP TO DATE</h3>
                            <p class="fs-5">Sign up for news and updates</p>
                            <button class="btn btn-light btn-rounded">SIGN UP</button>
                        </div>
                        <footer id="footer">
                            <div class="footer-top container">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 footer-contact footer-links">
                                        <h4>Company Name</h4>
                                        <p> A108 Adam Street <br> New York, NY 535022<br> United States <br><br>
                                            <span class="material-symbols-rounded"> phone </span> +1 5589 55488 55<br>
                                            <span class="material-symbols-rounded"> email </span> info@example.com<br>
                                        </p>
                                    </div>
                                    <div class="col-lg-3 col-md-6 footer-links">
                                        <h4>Useful Links</h4>
                                        <ul>
                                            <li> <a href="#">Home</a></li>
                                            <li> <a href="#">About us</a></li>
                                            <li> <a href="#">Services</a></li>
                                            <li> <a href="#">Terms of service</a></li>
                                            <li> <a href="#">Privacy policy</a></li>
                                        </ul>
                                    </div>
                            
                                    <div class="col-lg-3 col-md-6 footer-links">
                                        <h4>Our Services</h4>
                                        <ul>
                                            <li> <a href="#">Web Design</a></li>
                                            <li> <a href="#">Web Development</a></li>
                                            <li> <a href="#">Product Management</a></li>
                                            <li> <a href="#">Marketing</a></li>
                                            <li> <a href="#">Graphic Design</a></li>
                                        </ul>
                                    </div>
                            
                                    <div class="col-lg-3 col-md-6 footer-links">
                                        <h4>Our Networks</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </section>`;
    $('main').append(pageFooter);
}

header();
fooder();

$(function() {
    $(".main").UIPageScrolling({
        sectionsControl:".page-control__item",
        captureTouch: false
    });
});

if(!$('body').hasClass('home-page')){
    $('header').addClass('bg-light');
}