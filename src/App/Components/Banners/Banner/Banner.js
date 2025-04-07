import React from "react"
import Button from './Button'
import Classes from "./Banner.module.css"

function Banner() {
    return (
        <div className={Classes.Banner}>
            <div>
                <div className={Classes.title}>
                    Платформа для обучения персонала
                </div>
                <div className={Classes.info}>
                    Возможность каждому желающему повысить профессиональный
                    уровень и стать успешным в своей профессии.
                </div>
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}

export default Banner
