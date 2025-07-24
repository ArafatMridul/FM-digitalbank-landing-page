import React from "react";
import mobiles from "/images/image-mockups.png";
import desktopBg from "/images/bg-intro-desktop.svg";
import mobileBg from "/images/bg-intro-mobile.svg";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="overflow-x-clip bg-neutral-g-1 pb-14 lg:pb-44">
            <div className="wrapper lg:grid lg:grid-cols-2">
                <div className="relative lg:col-start-2">
                    <picture>
                        <source
                            media="(min-width: 1000px)"
                            srcset={desktopBg}
                        />
                        <img
                            src={mobileBg}
                            alt="intro background"
                            className="absolute -top-16 lg:-right-58 lg:scale-215 sm:-top-70 lg:top-5 w-full"
                        />
                    </picture>
                    <img
                        src={mobiles}
                        alt="mobile images"
                        className="absolute scale-90 -top-36 lg:-right-49 sm:scale-80 lg:scale-135 sm:-top-80 lg:-top-5"
                    />
                </div>
                <div className="pt-84 sm:pt-140 lg:pt-45 px-6 lg:px-0 text-center lg:text-start sm:max-w-[650px] sm:mx-auto lg:max-w-[500px] lg:mx-0 lg:col-start-1">
                    <h1 className="text-4xl lg:text-5xl lg:leading-16 text-primary-b tracking-wide lg:tracking-normal">
                        Next generation digital banking
                    </h1>
                    <p className="text-neutral-g-3 text-sm lg:text-lg lg:pr-12 mt-7 leading-tight lg:leading-normal">
                        Take your financial life online. Your Digitalbank
                        account will be a one-stop-shop for spending, saving,
                        budgeting, investing, and much more.
                    </p>
                    <Button className="mt-6 sm:mt-10 lg:mt-6">Request Invite</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
