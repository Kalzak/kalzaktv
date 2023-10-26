import React from 'react';

function ContactButton(props) {
    let target = "_blank";
    let link = props.link;
    if (props.link === "#") {
        target = "";
        link = `javascript:alert("My username: ${props.username}")`;
    }

    return (
        <a href={link} key={props.index} target={target}>
            <div className={`w-80 sm:w-96 mx-auto ${props.color} 
            text-center text-xl font-bold py-2.5 sm:py-3
            border-2 border-black
            shadow-custom hover:shadow-none transition-all
            hover:translate-x-1 hover:translate-y-1`}>
                <h1>{props.text}: {props.username}</h1>
            </div>
        </a>
    );
}

export default ContactButton;