import React from "react";

const GridItems = ({ icon, heading, description }) => {
    return (
        <div>
            <div>
                <img src={icon} alt={`${heading} icon`} className="mx-auto lg:mx-0 lg:mr-auto" />
            </div>
            <div className="text-center lg:text-start mt-10">
                <h3 className="text-primary-b text-2xl leading-snug font-nl">
                    {heading}
                </h3>
                <p className="text-neutral-g-3 leading-tight lg:leading-relaxed mt-3 lg:mt-6 text-sm lg:text-[1rem]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default GridItems;
