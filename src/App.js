import './App.css';
import ContactButton from './ContactButton';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';

import avatarGif from "./assets/avatar_static_loop.gif";
import contacts from "./data/contacts.json";
import staticVideo from "./assets/static.mp4";




function ContactPage() {
    /*
    const [color, setColor] = useState("#2dba14");

    useEffect(() => {
      const interval = setInterval(() => {
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    */
    const colors = [
        "#81EBEB",
        "#7A7AE5",
        "#E561C7",
        "#55F255",
        "#E25050",
    ]

    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    
    return (

        <div className="w-full h-[calc(100dvh)] bg-tvwhite-0 flex justify-center items-center transition-height duration-300 ease-in-out">
            <Helmet>
                <meta name="theme-color" content={colors[colorIndex]} />
            </Helmet>
            <video class="video-background" position="absolute" autoplay="autoplay" muted="muted" loop="loop" playsInline style={{ width: "100vw", height: "100vh", opacity: "30%", position: "absolute", zIndex: "-1", filter: "invert(1)", objectFit: "cover" }}>

                <source src={staticVideo} type="video/mp4" />
            </video>

            <div className="max-w-2xl mx-auto flex flex-col gap-2 sm:gap-5">

                <div className="h-40 w-40 sm:h-56 sm:w-56 mx-auto">
                    <div className="aspect-w-1 aspect-h-1">
                        <img src={avatarGif} className="rounded-full object-cover object-center border-4 border-black" />
                    </div>
                </div>

                <div className="text-center sm:p-3">
                    <h1 className="text-4xl font-bold">Kalzak</h1>
                    <p className="text-2xl sm:mt-3">
                        Security Researcher
                    </p>
                </div>

                <div className="flex flex-col gap-5 sm:gap-10">
                    {contacts.map(({ text, username, link, color}) => {
                        return (
                            <ContactButton text={text} username={username} link={link} color={color}/>
                        );
                    })}
                </div>

            </div>

        </div>

    );
}

export default ContactPage;
