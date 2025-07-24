import React from "react";

const ArticleItem = ({ image, author, heading, description }) => {
    return (
        <div className="bg-white">
            <div className="h-[200px] rounded-t-md overflow-clip">
                <img src={image} alt={`${heading} image`} className="w-full h-full" />
            </div>
            <div className="px-6 py-4 select-none">
                <p className="text-[0.76rem] text-neutral-g-3">{author}</p>
                <h4 className="text-md text-primary-b mt-4 leading-tight hover:text-primary-g transition duration-300 cursor-pointer">{heading}</h4>
                <p className="text-[0.9rem] text-neutral-g-3 mt-2 leading-tight">{description}</p>
            </div>
        </div>
    );
};

export default ArticleItem;
