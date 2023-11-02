import React from "react";
import { Button, containerClasses } from "@mui/material";
import './Home.css'
const img = "https://www.hackerrank.com/wp-content/uploads/2022/10/goldmansachs_black.png"
const img1 = "https://www.hackerrank.com/wp-content/uploads/2022/10/linkedin_black.png"
const img2 = "https://www.hackerrank.com/wp-content/uploads/2022/10/bloomberg_black.png"


function Home() {

    return (
        <>
           <div className="Container">
                <div className="banner">
               
                    <div className="content">
                        <h1>Skills speak louder <span>than words</span></h1>
                        <p>
                            We help companies develop the strongest tech teams around. We help <span>candidates sharpen their tech skills and pursue job opportunities.</span>
                        </p>

                        <div className="con">
                            <Button variant="contained" size="large" color="success">Sign up</Button>
                            <Button id="con1" variant="outlined" size="large">Request us</Button>
                        </div>

                        <p id="one">Over 40% of developers worldwide and 3,000 campanies use HackerRank</p>
                        <div className="logo">
                            <img src={img} alt="img1" />
                            <img src={img2} alt="img1" />
                            <img src={img} alt="img1" />
                            <img src={img} alt="img1" />
                            <img src={img} alt="img1" />
                            <img src={img2} alt="img1" />
                            <img src={img} alt="img1" />
                            <img src={img} alt="img1" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Home