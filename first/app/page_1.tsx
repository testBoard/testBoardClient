'use client';  
import Link from 'next/link';
import mainStyle from './main.module.css';
import { useState } from 'react';
import { useRef } from 'react';

export default function Home() {
  // let a = useState
  
  // email
  function doSomething() {
    console.log("123");
  }

  return (
    <div className={`${mainStyle.mainDiv}`}>     
      <div className={`${mainStyle.left}`}>
        <div className={`${mainStyle.leftBody}`}>
          <div className={`${mainStyle.jc}`}>
            <label className={`${mainStyle.title} col-md-5`}> Revolution in Sales </label>
            <div className={`${mainStyle.links}`}>
              <label> INVENTORY </label>
              <label> ORDER TRACKING </label>
              <label> DEBT MANAGEMENT </label>
            </div>
          </div>
        </div>
      </div>
      <div className={`${mainStyle.right}`}>
        <div className={`${mainStyle.rightBody}`}>
          <form className={`${mainStyle.registForm}`}>
            <div className={`${mainStyle.jc} ${mainStyle.welcomeText}`}>
              <label> Welcome to Shezvar </label>
              <label> 어쩌고저쩌고 </label>
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
              <button type="button" className={`btn ${mainStyle.loginBtn}`} onClick={doSomething}> Login </button>
              <Link className={`${mainStyle.forgotPw}`} href=""> Forgat password? </Link>
            </div>
            
          </form>
        </div>
        <div className={`${mainStyle.rightFooter}`}>

        </div>
      </div>       
    </div>
  )
}
