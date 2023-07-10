import React, { Component } from 'react'
import Router from "./router"
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <>
    <ToastContainer theme='colored' style={{marginTop:"10%"}}></ToastContainer>
     <Router/>  </>
    );
  }
  