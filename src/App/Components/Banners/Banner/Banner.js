import React from "react"
import Title from './Title'
import Info from './Info'
import Button from './Button'

import Classes from "./Banner.module.css"


function Banner() {
    var title = "Платформа для развития персонала,<br />просто и эффективно."
    var info = (
        "Возможность каждому желающему повысить профессиональный уровень<br />" +
        "и стать успешным в своей профессии."
    )

    return (
        <div className={Classes.Banner}>
            <div className={Classes.third}></div>
            <div className={Classes.first}>
                <Title html={title} />
                <Info html={info} />
            </div>
            <div className={Classes.second}>
                <Button />
            </div>
        </div>
    )
}

export default Banner
