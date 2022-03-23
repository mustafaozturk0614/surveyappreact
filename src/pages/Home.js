import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Card, Typography, CardContent, Button, Icon, Grid, Badge } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import '../pages/Home.css'
import QuestionContext from '../Context/QuestionContext';
import Side from '../Component/Side'
import SurveyService from './surveyService';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';

export default function Home() {


    const [page, setPage] = useState({
        content: [],
        size: 3,
        number: 0
    });



    const OnClickNext = () => {
        const nextPage = page.number + 1

        loadUser(nextPage)
    }
    const onClickPrev = () => {
        const nextPage = page.number - 1

        loadUser(nextPage)

    }


    const loadUser = async page => {
        let surveyService = new SurveyService()


        try {
            console.log("a")
            const response = await surveyService.getTemplates(page);
            setPage(response.data);
            console.log(response)

        } catch (error) {

        }
    };

    const { template, setTempalte } = useContext(QuestionContext)
    let list = (index) => {

        return template.questions[index]
    }
    useEffect(() => {
        loadUser()
        axios.get("/getall?page=0&size=3").then(result => console.log(result))


        console.log(page)

    }, [])

    const onClick = (e) => {
        setTempalte({})


    }

    const { content, last, first } = page

    return (

        <div  >
            <Grid className='side' item xs={3}><Side ></Side></Grid>
            <div className='homePage'>
                <Grid style={{ alignItems: 'center', justifyContent: "center", textAlign: "center", paddingTop: '20px' }}><h3>TEMPLATES</h3></Grid>
                <Grid>
                    <Grid item xs={9} className='homeDiv'>
                        <Stack  >

                            <Card className='homeCard'>
                                <CardContent >
                                    <Button onClick={onClick} ><Link to={"/create"}><Icon style={{ fontSize: 50 }} color="primary">add_circle </Icon></Link></Button>
                                </CardContent>
                            </Card>

                        </Stack >
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'row' }}>
                                {first === false &&
                                    <Button size='large' startIcon={<ArrowBackIosTwoToneIcon />}
                                        onClick={onClickPrev}></Button>}</div>
                            <Stack className='tempList' direction={'row'}>




                                {content.map((data, index) =>
                                    <Link to={`/template/${data.id}`}>
                                        <Stack style={{ marginLeft: 10 }} key={index} > <Card className='homeCard' sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Typography variant="h5"  >
                                                    <Link to={`/template/${data.id}`}>{data.title}</Link>
                                                </Typography >
                                                <Typography style={{ paddingTop: 120 }} variant="body2">
                                                    {data.description}
                                                    <br />  </Typography>
                                            </CardContent>
                                        </Card></Stack>
                                    </Link>
                                )}




                            </Stack>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {last === false &&
                                    <Button size='large' startIcon={<ArrowForwardIosTwoToneIcon />}
                                        onClick={OnClickNext}></Button>}</div>

                        </div>
                    </Grid >


                </Grid>
            </div>
        </div >
    )
}
