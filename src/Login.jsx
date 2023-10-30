import { Container } from "@mui/material";
import React from "react";
import './Login.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import TextField from '@mui/material/TextField';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import InputAdornment from '@mui/material/InputAdornment';

function Login() {
    
    return (
        <>

            <div className="cover">


                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Your username or password "
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PermIdentityOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}

                />
                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Your username or password "
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <HttpsOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}


                />
                <div className="check">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    <a id="forgot">Forgot your password?</a>
                </div>
                <div className="login">

                    <Button variant="contained" color="success">
                        LogIn
                    </Button>

                </div>

            </div>

        </>

    )

}
export default Login