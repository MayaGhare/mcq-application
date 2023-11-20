import React from "react";
import { Button, containerClasses } from "@mui/material";
import '../style/LoginEntry.css'
function LoginEntry() {

    return (
        <>

            <div className="container-fluid">
                <section className="section_one">
                    <h1>
                        For <span className="blue-text">Companies</span>
                    </h1>
                    <p>We are the market–leading technical interview platform to identify
                        and hire developers with the right skills.
                    </p>
                    <Button variant="contained" color="success">Login</Button>
                    <p className="account">
                            Don't have an account?
                            </p> 
                        <a href="#">
                            Contact sales</a> or<a> Get free trial
                        </a>
                   

                </section>
                <section className="section_second">
                    <h1>For <span className="blue-text">Developers</span></h1>
                    <p>Join over 21 million developers, practice coding skills,
                        prepare for interviews, and get hired.</p>

                    <Button variant="outlined" color="success">Login</Button>
                    <p class="account">Don't have an account?</p>
                        <a>Sign up</a>
                </section>
            </div>
        </>
    )
}
export default LoginEntry