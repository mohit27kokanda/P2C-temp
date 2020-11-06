$(document).ready(function(){
    const footer = `
    <footer id="footer">

    <div class="footer-newsletter">
        <div class="container">
        <div class="row">
            <div class="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter for latest updates.</p>
            </div>
            <div class="col-lg-6">
            <form method="post" id="newsletter" role="form">
                <input class="w-100" type="email" placeholder="Enter your email" name="email" required><input type="submit" value="Subscribe">
            </form>
            </div>
        </div>
        </div>
    </div>
    <hr>
    <div class="footer-top">
        <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
                12B, 2nd Floor, Malkaganj<br>
                New Delhi, Delhi 110007<br>
                India <br><br>
                <strong>Sales:</strong><a href="tel:+91 9311465556">&nbsp;+91 9311-465-556</a><br>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><a
                href="tel:+91 9311986663">&nbsp;+91 9311-986-663</a><br></a><br>
                <strong>Email:</strong><a href="mailto:sales@power2create.in">&nbsp;sales@power2create.in</a><br>
            </p>

            </div>

            <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="freeQuote.html">Get A Free Quote</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="index.html">Company Profile</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="Blog.html">Blogs</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="Privacy_policy.html">Disclaimer</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="Contact_Us.html">Contact Us</a></li>
            </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="it_services.html">Android App Development</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Hybrid App Development</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">iOS Develpment</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Magneto</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">PHP</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">WordPress</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Internet Marketing</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">SEO</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="BusinessServices.html">Idea Identification & Assessment</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Building a Legal Foundation</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Understanding Financial Basics</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Business Planning & Modeling</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Fund Raising & Valuation</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Pitching & Term Sheet</a></li>
            </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-info">
            <h3>About Power2Create</h3>
            <p>In 2019, we started our venture with minimal resource but within short span we are emerging as one of the
                best business incubators in India. We are registered under The Company Act, 2013 and consists of edged as
                well as experienced professional from almost all sort of fields i.e. Lawyers, Chartered Accountants,
                Market Analyst, Social Media Team, Financial Experts and others.</p>

            </div>

        </div>
        </div>
    </div>
    <div class="container my-3">
        <div class="copyright text-center">
        &copy; Copyright <strong><span>Power2Create</span></strong> 2020 P2L Impact Learning Empowers Pvt. Ltd. All
        Rights Reserved
        </div>
    </div>
    <hr>
    <!----------------------------------------footer icons -------------------------------->
    <!--<div class="container">
        <div class="row my-5">
            <div class="col-1"></div>
            <div class="col-2 text-center">
                
                <div class="footer-icon-link">
                    <div class="footer-icon">
                        <a href="#" class="twitter" style="color:black"><i class="bx bxl-twitter"></i></a>
                    </div>
                </div>
                
            </div>
            <div class="col-2 text-center">
                
                <div class="footer-icon-link">
                    <div class="footer-icon">
                        <a href="#" class="facebook" style="color:black"><i class="bx bxl-facebook"></i></a>
                    </div>
                </div>
                
            </div>
            <div class="col-2 text-center">
                
                <div class="footer-icon-link">
                    <div class="footer-icon">
                        <a href="#" class="instagram" style="color:black"><i class="bx bxl-instagram"></i></a>
                    </div>
                </div>
                
            </div>
            
            <div class="col-2 text-center">
                
                <div class="footer-icon-link">
                    <div class="footer-icon">
                        <a href="#" class="youtube" style="color:black"><i class="bx bxl-youtube"></i></a>
                    </div>
                </div>
                
            </div>
            
            <div class="col-2 text-center">
                
                <div class="footer-icon-link">
                    <div class="footer-icon">
                        <a href="#" class="linkedin" style="color:black"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>-->
    
</footer>
`;

    $('#footer').append(footer);
});