import React from 'react'
import Banners from '@Components/Banners'
import Classes from "./App.module.css"
import "./index.css"


function App({settings}) {
    const {success, data} = settings
    if (!success) {
        return null
    }

    return (
        <div className={Classes.App}>
            <Banners settings={data} />
        </div>
    )
}

export default App
