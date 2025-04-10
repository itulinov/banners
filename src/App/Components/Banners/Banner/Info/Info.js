import React from "react"
import Classes from "./Info.module.css"

function Info({html=""}) {
    return (
        <div className={Classes.Info}
            dangerouslySetInnerHTML={{ __html: html }}
        ></div>
    )
}

export default Info
