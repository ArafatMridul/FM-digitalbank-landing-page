import React from "react";
import ArticleItem from "./ArticleItem";
import image1 from "/images/image-currency.jpg";
import image2 from "/images/image-restaurant.jpg";
import image3 from "/images/image-plane.jpg";
import image4 from "/images/image-confetti.jpg";

const Articles = () => {
    return (
        <section className="bg-neutral-g-1">
            <div className="wrapper pt-18 pb-20 lg:pt-20 px-6 lg:px-0 sm:px-20">
                <div>
                    <h3 className="text-3xl lg:text-[2.5rem] text-primary-b text-center lg:text-start">Latest Articles</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-5 mt-12">
                    <ArticleItem
                        image={image1}
                        author="By Claire Robinson"
                        heading="Receive money in any currency with no fees"
                        description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
                    />
                    <ArticleItem
                        image={image2}
                        author="By Wilson Hutton"
                        heading="Treat yourself without worrying about money"
                        description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
                    />
                    <ArticleItem
                        image={image3}
                        author="By Wilson Hutton"
                        heading="Take your Digitalbank card wherever you go"
                        description="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
                    />
                    <ArticleItem
                        image={image4}
                        author="By Claire Robinson"
                        heading="Our invite-only Beta accounts are now live!"
                        description="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
                    />
                </div>
            </div>
        </section>
    );
};

export default Articles;
