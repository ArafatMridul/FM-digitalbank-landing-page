import React from "react";
import siteLogo from "/images/logo-light.svg";
import icon1 from "/images/icon-facebook.svg";
import icon2 from "/images/icon-youtube.svg";
import icon3 from "/images/icon-twitter.svg";
import icon4 from "/images/icon-pinterest.svg";
import icon5 from "/images/icon-instagram.svg";
import Button from "./Button";

const Footer = () => {
    return (
        <footer className="bg-primary-b">
            <div className="wrapper pt-13 pb-13 lg:flex lg:justify-between">
                <div className="lg:flex-1/5 lg:mr-20">
                    <div>
                        <img
                            src={siteLogo}
                            alt="digitalbank icon"
                            className="mx-auto lg:mx-0 lg:mr-auto"
                        />
                    </div>
                    <div className="flex items-center lg:justify-start gap-4 justify-center mt-8 lg:mt-12">
                        <img
                            src={icon1}
                            alt="facebook icon"
                            className="cursor-pointer"
                        />
                        <img
                            src={icon2}
                            alt="youtube icon"
                            className="cursor-pointer"
                        />
                        <img
                            src={icon3}
                            alt="twitter icon"
                            className="cursor-pointer"
                        />
                        <img
                            src={icon4}
                            alt="pinterest icon"
                            className="cursor-pointer"
                        />
                        <img
                            src={icon5}
                            alt="instagram icon"
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div className="text-center lg:text-start text-white flex flex-col gap-2 mt-8 lg:mt-0 lg:flex-1/5">
                    <p className="hover:text-primary-g cursor-pointer select-none transition duration-300 lg:w-fit">
                        About Us
                    </p>
                    <p className="hover:text-primary-g cursor-pointer select-none transition duration-300 lg:w-fit">
                        Contact
                    </p>
                    <p className="hover:text-primary-g cursor-pointer select-none transition duration-300 lg:w-fit">
                        Blog
                    </p>
                </div>
                <div className="text-center lg:text-start text-white flex flex-col gap-2 mt-2 lg:mt-0 lg:flex-1/5">
                    <p className="hover:text-primary-g cursor-pointer select-none transition duration-300 lg:w-fit">
                        Careers
                    </p>
                    <p className="hover:text-primary-g cursor-pointer select-none transition duration-300 lg:w-fit">
                        Support
                    </p>
                    <p className="hover:text-primary-g cursor-pointer select-none transition duration-300 lg:w-fit">
                        Privacy Policy
                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-end justify-center lg:justify-center mt-7 lg:mt-0 lg:flex-2/5">
                    <Button>Request Invite</Button>
                    <p className="mt-5 text-sm text-neutral-g-3">
                        © Digitalbank. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
