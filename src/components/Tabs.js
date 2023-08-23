import React, { useState } from "react";


const Tabs = (tabs) => {

    const [tab, setTab] = useState('Tab 1')

    return (
        <div>
            <ul>
            {
                tabs.map( (tab) => (
                    <li onClick={() => setTab(tab.title)}>tab.title</li>
                ))
            }
            </ul>
            <p>This is the content for {tab}</p>
        </div>
    )

}

export default Tabs