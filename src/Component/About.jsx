import React from "react";
import '../style/About.css'
import { useState } from 'react';
import { useEffect, useRef } from "react";
const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
const img2 = "https://picsum.photos/200/300"

import { Button, containerClasses } from "@mui/material";
function About() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };
    useEffect(() => {
        attemptPlay();
    }, []);

    const [isButtonEnabled, setButtonEnabled] = useState(true);

    // Function to enable the button
    const enableButton = () => {
        setButtonEnabled(false);
    };


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">

                        <h1 className="logo">H</h1>

                        <h1>How do you want to <span>use HackerRank</span></h1>

                        <p>We will personalize your setup experince accordingly?</p>


                        <div className="get_started">
                            <ul >
                                <li ><a onClick={enableButton} href="#" data-url="hire-now" data-action="hire_coding">
                                    <svg width="51" height="44" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg_icon svg_hire">

                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C17 15.5817 20.5817 12 25 12C29.4183 12 33 15.5817 33 20C33 24.4183
                                         29.4183 28 25 28C20.5817 28 17 24.4183 17 20ZM25 10C19.4772 10 15 14.4772 15 20C15 25.5228 19.4772 30 25 30C27.4018 30 29.6058 29.1533
                                          31.3298 27.7421L37.2941 33.7063C37.6846 34.0969 38.3178 34.0969 38.7083 33.7063C39.0988 33.3158 39.0988 32.6827 38.7083 32.2921L32.7438
                                           26.3277C34.154 24.6039 35 22.4008 35 20C35 14.4772 30.5228 10 25 10Z" fill="black"></path></svg><b>I’m here to hire tech talent</b>
                                    Evaluate tech skills at scale<i>Free trial</i></a></li>
                                <li ><a onClick={enableButton} href="#" data-url="/signup" data-action="practice"><svg width="47" height="44" viewBox="0 0 47 44" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="svg_icon svg_practice"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1842 11L11.0015 13.1895L19.6042 21.8125L11.0015 30.4355L13.1842 
                             32.625L23.9765 21.8125L13.1842 11ZM25.8007 32H39.8007V30H25.8007V32Z" fill="black"></path>
                                </svg><b>I’m here to practice and prepare</b> Solve problems and learn new skills</a></li>
                            </ul>
                            <Button disabled={isButtonEnabled} className="btn" variant="contained" color="success"  >Create Account</Button>
                        </div>
                    </div>
                    <div className=" video col-sm-4">
                        <video
                            style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                            playsInline
                            loop
                            muted
                            controls
                            alt="All the devices"
                            src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                            ref={videoEl}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About