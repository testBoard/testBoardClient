'use client';  
import Link from 'next/link';
import mainStyle from './main.module.css';
import Login from './login.js';

import InnerStyle from './innerStyle';

import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';

export default function Home() {
  let [email, emailChange] = useState("");
  let [signIn, setSignIn] = useState("dn");
  let [login, setLogin] = useState("");
  
  // useEffect(() => {
  //   if("" == email)
  //   {
  //       setLogin("dn");
  //       setSignIn("");
  //   }
  //   else
  //   {
  //       setLogin("");
  //       setSignIn("dn");
  //   }    
  // })

  return (
    <div className={`${mainStyle.mainDiv}`}>  
      <InnerStyle></InnerStyle>

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
      <Login email = {email} emailChange = {emailChange} signIn = {signIn} login = {login}></Login>
    </div>
  )
}
