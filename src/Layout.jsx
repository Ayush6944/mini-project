import React from "react"
import Header from "./componen/header/header"
import Footer from "./componen/footer/footer"
import { Outlet } from "react-router-dom"
import { NavLink,Link } from "react-router-dom"

export default function Layout(){
return(
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
)

}