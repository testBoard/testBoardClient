'use client';  
import Link from 'next/link';
import mainStyle from './main.module.css';
import Regist from './regist.js';

import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';

export default function Login({email, emailChange, signIn, login}) {
    let [registShow, setRegistShow] = useState(false);

    return (
        <div className={`${mainStyle.right}`}>
            <style jsx> {`
                .dn {
                    display: none;
                }
            `}
            </style>

            <div className={`${mainStyle.rightBody}`}>
            <form className={`${mainStyle.registForm}`}>
                <div className={`${mainStyle.jc} ${mainStyle.welcomeText}`}>
                <label> Welcome to Shezvar </label>
                </div>
                <div className={`${mainStyle.progressBar}`}>
                <div className={`form-control`} />
                <div className={`form-control`} />
                </div>
                <div className={`${mainStyle.inputBox} ${mainStyle.jc}`}>
                <label>Email</label>
                <input type='text' name="email" className="form-control" onChange={ (e) => { emailChange(e.target.value) } } value={ email } placeholder="email@mail.com"/>
                <label></label>
                <input type='text' name="pw" className="form-control" placeholder="password"/>
                </div>
                <div className={`${mainStyle.btnDiv}`}>
                <div className={`${mainStyle.linkDiv}`}>
                <Link href="/" onClick={ () => setRegistShow(true) }> Sign In? </Link>
                {    
                    true == registShow ? <Regist show = { registShow } onHide = { () => setRegistShow(false) } ></Regist> : ""
                }
                    <Link href="./regist"> Forgot password? </Link>
                </div>
                {/* <button type="button" className={`btn ${mainStyle.loginBtn} ${signIn}`} onClick={regist}> Sign In </button> */}
                <button type="submit" className={`btn ${mainStyle.loginBtn} ${login}`} > Login </button>
                </div>
            </form>
            </div>
            <div className={`${mainStyle.rightFooter}`}>

            </div>
        </div> 
    )
}
