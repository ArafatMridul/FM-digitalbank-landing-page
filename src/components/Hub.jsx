import React from "react";
import icon1 from "/images/icon-online.svg";
import icon2 from "/images/icon-budgeting.svg";
import icon3 from "/images/icon-onboarding.svg";
import icon4 from "/images/icon-api.svg";
import GridItems from "./GridItems";

const Hub = () => {
    return (
        <section className="bg-neutral-g-2">
            <div className="wrapper pt-16 pb-12 lg:pt-22 lg:pb-18 px-6 lg:px-0 sm:w-[500px] lg:w-auto">
                <div className="text-center lg:text-start">
                    <h2 className="text-primary-b px-14 lg:px-0 text-3xl lg:text-[2.5rem] leading-snug font-nl">
                        Why choose Digitalbank?
                    </h2>
                    <p className="text-neutral-g-3 leading-tight lg:leading-normal mt-3 lg:mt-8 text-sm lg:text-lg lg:w-3/5">
                        We leverage Open Banking to turn your bank account into
                        your financial hub. Control your finances like never
                        before.
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 gap-10 lg:gap-12 mt-10 lg:mt-18">
                    <GridItems
                        icon={icon1}
                        heading="Online Banking"
                        description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                    />
                    <GridItems
                        icon={icon2}
                        heading="Simple Budgeting"
                        description="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
                    />
                    <GridItems
                        icon={icon3}
                        heading="Fast Onboarding"
                        description="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
                    />
                    <GridItems
                        icon={icon4}
                        heading="Open API"
                        description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                    />
                </div>
            </div>
        </section>
    );
};

export default Hub;
