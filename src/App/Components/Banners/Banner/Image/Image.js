import React from "react"
import getSrcFromName from "@App/libs/getSrcFromName.js"

import Classes from "./Image.module.css"


function Image() {
    const style = {
        backgroundImage: 'url("' + getSrcFromName("banner") + '"',
    }

    return (
        <div className={Classes.Image} style={style}></div>
    )
}

export default Image
