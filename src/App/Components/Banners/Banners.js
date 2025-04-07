import React from "react"
import Banner from './Banner'
import Classes from "./Banners.module.css"

function Banners({settings}) {
    console.log(settings)
    return (
        <div className={Classes.Banners}>
            <Banner />
        </div>
    )
}

export default Banners
