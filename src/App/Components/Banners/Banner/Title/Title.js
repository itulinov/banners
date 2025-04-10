import React from "react"
import Classes from "./Title.module.css"

function Title({html=""}) {
    return (
        <div className={Classes.Title}
            dangerouslySetInnerHTML={{ __html: html }}
        ></div>

    )
}

export default Title
