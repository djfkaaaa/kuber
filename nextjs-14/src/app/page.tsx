'use client';

import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import { url } from "inspector";
import { config } from "process";
import { json } from "stream/consumers";
import Link from "next/link";
import './globals.css';
import { Button } from "@mui/material";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";
import { PG } from "../redux/common/enums/PG";



export default function Home() {
  
  const [name, setName] = useState('')
  const handleChange = (e : any) => {
    setName(e.target.value)
  }
  const handleClick = () => {
    alert('리스트가 가져가는 이름 = ' + name)
    const url = `${API.SERVER}/name` 
    const data = {'name': name}
    const config = AxiosConfig()
    axios.post(url,data,config)
    .then(res=>{alert("리스폰스가 가져온 이름 = " + JSON.stringify(res.data))})
  }
  return(
    
    <div className="margincenter w-4/5 my-[30px] border-double border-4">
    <div className="text-3xl font-bold underline text-center">Demo</div>
    <span className="text-red-500 mr-5">이름입력</span> <br />
    <input type="text" onChange={handleChange} className="mr-5"/> <br />
    <Button variant="outlined" onClick={handleClick}>입력</Button> <br />
    <br />
    <Link href={`${PG.USER}/login`}>로그인창</Link> <br /> <br />
    <Link href={`${PG.USER}/join`}>회원가입창</Link> <br /> <br />
    <Link href={`${PG.DEMO}/mui-demo`}>MUI-데모</Link> <br /> <br />
    <Link href={`${PG.DEMO}/companies`}>컴퍼니</Link> <br /> <br />
    <Link href={`${PG.DEMO}/counter`}>카운터 데모</Link> <br /><br />
    <Link href={`${PG.DEMO}/redux-counter`}>리덕스 카운터 데모</Link> <br /><br />
    <Link href={`${PG.DEMO}/counter/container`}>리덕스 데모</Link> <br /><br />
    <Link href={`/pages/boards/articles`}>아티클</Link> <br /><br />
    <Link href={`/pages/users/findUsers`}>유저</Link> <br /><br />
    </div>
    
  );
}
