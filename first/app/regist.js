'use client';  
import Link from 'next/link';
import mainStyle from './main.module.css';
import Modal from 'react-bootstrap/Modal';

import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';

export default function Regist({show, onHide}) {
    
    return (
        // <div>
        <Modal show = { show } onHide = { onHide }  >
            <div className={`${mainStyle.right}`}>
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
                    <input type='text' name="email" className="form-control"  placeholder="email@mail.com"/>
                    <label></label>
                    <input type='text' name="pw" className="form-control" placeholder="password"/>
                    </div>
                    <div className={`${mainStyle.btnDiv}`}>
                    <button type="button" className={`btn ${mainStyle.loginBtn} `} > Sign In </button>
                    <button type="submit" className={`btn ${mainStyle.loginBtn} `} > Login </button>
                    <Link className={`${mainStyle.forgotPw}`} href="./regist"> Forgat password? </Link>
                    </div>
                    
                </form>
                </div>
                <div className={`${mainStyle.rightFooter}`}>

                </div>
            </div> 
        </Modal>
        // </div>
    )
}
