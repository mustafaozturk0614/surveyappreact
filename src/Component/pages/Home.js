import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Card, Typography, CardContent, Button, Icon } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import '../pages/Home.css'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import QuestionContext from '../Questions/QuestionContext';

export default function Home() {

    const [templates, setTemplates] = useState([])

    const { template, setTempalte } = useContext(QuestionContext)
    let list = (index) => {

        return template.questions[index]
    }
    useEffect(() => {

        axios.get("/getall").then(result => setTemplates(result.data))


        console.log(templates[0])

    }, [])

    const onClick = (e) => {
        setTempalte({})


    }
    return (

        <div style={{ width: "100%", height: "2000px", backgroundColor: "#94bbe9", position: 'fixed', top: 55 }}>
            <div style={{ alignItems: 'center', justifyContent: "center", textAlign: "center", marginTop: 20 }}><h3>TEMPLATES</h3></div>
            <div className='homeDiv' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Stack style={{ marginLeft: 10 }} > <Card className='homeCard' sx={{ minWidth: 275 }}><CardContent>
                    <Button onClick={onClick} ><Link to={"/create"}><Icon style={{ fontSize: 50 }} color="primary">add_circle </Icon></Link></Button>
                </CardContent>
                </Card></Stack>


                {templates.map((data, index) =>

                    <Stack style={{ marginLeft: 10 }} key={index} > <Card className='homeCard' sx={{ minWidth: 275 }}><CardContent><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                    </Typography><Typography variant="h5" component="div" >
                            <Link to={`/template/${data.id}`}>{data.title}</Link>
                        </Typography >



                        <Typography sx={{ mb: 1.5 }} color="text.secondary">

                        </Typography><Typography variant="body2">
                            {data.description}
                            <br /></Typography></CardContent>
                    </Card></Stack>




                )}








            </div >

        </div >
    )
}
