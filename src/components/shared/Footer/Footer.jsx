import React from 'react';
import * as FaIcons  from "react-icons/fa";


import footerImg from './../../../assets/footer/fimg.png'
import footerCss from './footer.module.css'

const Footer = () => {
    return (
        <>
        <div className={footerCss.youload_footer_section}>
            <div className="container">
                 <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-follow-links">
                            <h4 className={footerCss.footer_title_text}>Follow us on</h4>
                            <div className={footerCss.footer_social_links}>
                                <span><FaIcons.FaFacebookSquare /></span>
                                <span><FaIcons.FaTwitter /></span>
                                <span><FaIcons.FaInstagram /></span>
                                <span><FaIcons.FaLinkedin /></span>
                            </div>
                            <div>
                                <img src={footerImg} className='img-fluid mt-3' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_contact_us">
                            <h4 className='text-center'>Contact us</h4>
                            <div className={footerCss.contact_us_div}>
                                <div>
                                    <h6 className={footerCss.contact_sub_title}>Email</h6>
                                    <p>sample@gmail.com</p>
                                </div>
                                <div>
                                    254 river,
                                    <br />
                                    Arusha, Tanzania
                                </div>
                            </div>
                            <hr className={footerCss.footer_hr} />
                            <div>
                                <h4 className={footerCss.contact_sub_title_two}>Subscribe to our newsletter</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi placeat eaque, nemo quisquam odit?</p>
                            </div>
                            <div>
                                <button className={footerCss.footer_btn}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_get_in_touch">
                            <h4>Get in touch</h4>
                            <form className='mt-4'>
                                <div className={footerCss.contact_input}>
                                    <input type="text" placeholder='Name' />
                                </div>
                                <div className={footerCss.contact_input}>
                                    <input type="email" placeholder='Email' />
                                </div>
                                <div className={footerCss.contact_input}>
                                    <textarea name="" id="" placeholder='Message'></textarea>
                                </div>
                                <div>
                                    <button className={footerCss.footer_btn}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                 </div>
            </div> 
        </div>
         <div className={footerCss.youload_copyright}>
            <p className='text-center text-light'>copyright &copy; 2022 youload</p>
        </div> 
        </>
    );
};

export default Footer;