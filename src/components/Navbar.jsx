import React, { useEffect, useState } from "react";
import siteLogo from "/images/logo-dark.svg";
import hamburger from "/images/icon-hamburger.svg";
import close from "/images/icon-close.svg";
import Button from "./Button";
import { motion, AnimatePresence } from "motion/react";
import NavbarLiItem from "./NavbarLiItem";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-white z-50">
                <div className="wrapper py-5 lg:py-4.5 px-6 sm:px-10 lg:px-0 flex items-center justify-between">
                    <div>
                        <img src={siteLogo} alt="digitalbank logo" />
                    </div>
                    <div
                        className="lg:hidden"
                        onClick={() => setIsOpen((curr) => !curr)}
                    >
                        <img
                            src={isOpen ? close : hamburger}
                            alt={isOpen ? "close icon" : "menu icon"}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-6 text-md font-nl text-neutral-g-3">
                            <NavbarLiItem>Home</NavbarLiItem>
                            <NavbarLiItem>About</NavbarLiItem>
                            <NavbarLiItem>Contact</NavbarLiItem>
                            <NavbarLiItem>Blog</NavbarLiItem>
                            <NavbarLiItem>Careers</NavbarLiItem>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <Button>Request Invite</Button>
                    </div>
                </div>
                <div className="">
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                    className="fixed lg:hidden bg-gradient-to-b from-primary-b to-transparent top-[62px] right-0 left-0 bottom-0 z-40"
                                ></motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -100 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute lg:hidden top-22 left-6 right-6 py-8 rounded-sm bg-white z-50"
                                >
                                    <ul className="flex flex-col items-center gap-4 text-lg font-nl text-neutral-primary-b">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                        <li>Blog</li>
                                        <li>Career</li>
                                    </ul>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </header>
            <div className="h-[62px] lg:h-[80px]"></div>
        </>
    );
};

export default Navbar;
