import React from 'react'
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 ' >
            <div className="bg-[#9fa49f] min-h-screen text-black lg:block justify-center items-center
             p-6 hidden">
                <div className="max-w-3xl text-center mt-50 ">
                    <h1 className="text-4xl font-bold">
                        <span className="text-blue-600">HELLO</span> <br />
                        I'm Lokesh Kumar
                    </h1>
                    <p className="mt-4 text-lg">
                        Recently graduated job seeker, motivated and adaptable B.Tech graduate in <br />
                        Information Technology with hands-on experience in full-stack web development.
                    </p>
                    <p className="mt-2 text-lg">
                        Passionate about creating scalable, user-friendly applications, with a strong <br />
                        foundation in Data Structures and Algorithms, and a quick learner with a growth mindset.
                    </p>
                    <div className="flex justify-center items-end gap-4 h-46">
                        <a className='px-8 py-4  bg-black text-white transition duration-300 cursor-pointer
                         hover:bg-amber-600 '>
                            <Link to="about"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                More About Me
                            </Link>
                        </a>
                        <a className='px-8 py-4 bg-white text-black border border-black transition duration-200
                         cursor-pointer hover:bg-black hover:text-white' >
                            <Link to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                            Get In Touch
                            </Link>
                        </a>
                    </div>
                </div>

            </div>
            <div className='relative bg-[url("/lokesh1.jpg")] bg-cover bg-[center_1px] lg:bg-[center_5px] 
            min-h-screen text-black flex justify-center items-center p-6 brightness-100'>

                <div className="lg:hidden max-w-3xl text-center mt-50 ">
                    <h1 className="text-4xl font-bold">
                        <span className="text-orange-400 text-sm">HELLO</span> <br />
                        <span className='text-white'>I'm Lokesh Kumar</span>
                    </h1>
                    <p className="text-[#ECEEEC] mt-4 text-lg">
                        Recently graduated job seeker, motivated and adaptable B.Tech graduate in <br />
                        Information Technology with hands-on experience in full-stack web development.
                    </p>

                    <div className="flex flex-col justify-center gap-4 h-96">
                        <a className='px-8 py-4  bg-black text-white transition duration-300 cursor-pointer
                         hover:bg-amber-600 '>
                           <Link to="about"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                More About Me
                            </Link>
                        </a>
                        <a className='px-8 py-4 bg-white text-black border border-black border-solid 
                        transition duration-200 cursor-pointer hover:bg-black hover:text-white' >
                            <Link to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                            Get In Touch
                            </Link>
                        </a>

                    </div>
                </div>
                <div className='absolute bottom-10 lg:bottom-20 left-10 text-center p-4'>
                    <div className="bg-white h-0.5 w-20 lg:w-32 absolute top-7 left-[-64px] lg:left-[-112px]"></div>
                    <a href="/cv.pdf"
                        download="Lokesh-CV.pdf"
                        className='px-10 lg:px-8 py-4 bg-transparent text-white font-semibold lg:border-2
                         border-white transition duration-300 cursor-pointer hover:bg-white hover:text-black'>
                        GET MY CV
                    </a>
                </div>
                <div className='-mr-[28px] lg:-mr-[90%] mt-[400px] lg:mt-80 bg-transparent p-5 h-64 '>
                    <ul className='flex flex-col gap-2'>
                        <li className=" text-2xl text-[#979c95ee] rounded-3xl transition-transform duration-300 
                        hover:scale-110 hover:text-white">
                            <a
                                href="https://www.linkedin.com/in/lokesh-kumar-63a5b7290"
                                target="_blank"
                                rel="noopener noreferrer" /* noopener → stops the new tab from controlling your page (protects from hacking).
                                                            noreferrer → hides your website address from the site you’re opening (extra privacy). */
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className='text-2xl text-[#979c95ee] rounded-3xl transition-transform duration-300 
                        hover:scale-110 hover:text-white'>
                            <a
                                href="https://github.com/lokeshkum1r"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li className='text-2xl text-[#979c95ee] rounded-3xl transition-transform duration-300 
                        hover:scale-110 hover:text-white'>
                            <a href="https://leetcode.com/u/lokeshK12/"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <i className="fa-regular fa-file-code"></i>
                            </a>
                        </li>
                        <li className='text-2xl text-[#979c95ee] rounded-3xl transition-transform duration-300
                         hover:scale-110 hover:text-white'>
                            <a href="https://www.instagram.com/lokeshsingh2493?igsh=MTZpYzY5aGFvNHM5bA=="
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li
                            className="text-2xl text-[#979c95ee] rounded-3xl transition-all duration-500 hover:scale-110 hover:text-white"
                        >
                            <button
                                onClick={(e) => {
                                    const answer = confirm("Do you want to Hire me?");
                                    if (answer) {
                                        // If YES clicked
                                        window.open(
                                            "https://wa.me/919530203623",
                                            "_blank",
                                            "noopener,noreferrer"
                                        );
                                    } else {
                                        // If NO clicked → fade out the parent li
                                        const liElement = e.target.closest("li");
                                        if (liElement) {
                                            liElement.style.opacity = "0"; // fade out
                                            liElement.style.pointerEvents = "none"; // disable clicks
                                        }
                                    }
                                }}
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                            </button>
                        </li>

                        <li className="relative ">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-white"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Intro
