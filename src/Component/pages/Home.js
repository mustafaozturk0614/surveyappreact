import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Home() {

    const [templates, setTemplates] = useState([])


    useEffect(() => {

        axios.get("/getall").then(result => setTemplates(result.data))


        console.log(templates[0])

    }, [])
    return (
        <div>
            <ul>

                {templates.map((data, index) => <li key={index} > <Link to={`/template/${data.id}`}>{data.title}</Link> </li>)}

            </ul>

        </div>
    )
}
