import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CardActions, Card, IconButton, Typography, CardContent, Button, Icon, Grid, Badge } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import '../pages/Home.css'
import QuestionContext from '../Context/QuestionContext';
import Side from '../Component/Side'
import SurveyService from './surveyService';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { positions } from '@mui/system';
import { Divider } from 'antd';
import AddSurvey from './AddSurvey';
import SurveyContext from '../Context/SurveyContext';
import SurveyTemplateDetail from './SurveyTemplateDetail';
export default function Home() {
    const { visible, setVisible, survey, setSurvey } = useContext(SurveyContext);

    const { page, setPage } = useContext(SurveyContext);


    const showDrawer = (id) => {

        setVisible(true);
        let surveyService = new SurveyService();
        surveyService.getBySurveyId(id).then(result => setSurvey(predta => ({ ...result.data })))

    };



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


        } catch (error) {

        }
    };

    const { template, setTemplate } = useContext(SurveyContext)
    let list = (index) => {

        return template.questions[index]
    }
    useEffect(() => {
        loadUser()


    }, [template])


    const onClick = (e) => {
        setTemplate(preTemplate => ({ ...template, questions: [] }))
        console.log(template)


    }
    const onClickDelete = () => {



    }
    const findTemplate = (e) => {
        e.preventDefault()
        console.log(e.target.name)

    }

    const { content, last, first } = page

    return (



        <div className='homePage'><Grid className='side' item xs={3}>
            <Side ></Side>
        </Grid>
            <Grid>
                <Grid item xs={9} className='homeDiv'>

                    <Stack  >
                        <div style={{ display: 'block', marginTop: 20 }} > <h3 >TEMPLATES</h3></div>

                        <Card className='homeCard1'>
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

                                <Stack style={{ marginLeft: 10 }} key={index} >

                                    <Card className='homeCard'
                                    >

                                        <Typography variant="h5"  >
                                            <Link to={`/template/${data.id}`}>{data.title}</Link>
                                            <Typography variant="body2">
                                                {data.description}
                                                <br />
                                            </Typography >
                                        </Typography >
                                        <Typography style={{ marginBottom: -11 }} variant="body2">



                                            <CardActions style={{


                                                justifyContent: 'space-between',



                                            }} disableSpacing>
                                                <div className='dataid'>
                                                    <Button onClick={() => {


                                                        showDrawer(data.id)
                                                    }


                                                    } name={data.id} id={data.id} aria-label="add to favorites">

                                                        <SettingsIcon id={data.id} fontSize='medium' color='info' />
                                                    </Button></div>

                                                <IconButton aria-label="share">
                                                    <Link to={`/template/${data.id}`}> <EditIcon name={data.id} onClick={(e) => {
                                                        setTemplate(pre => ({ ...template, ...data }))
                                                        console.log(template)


                                                    }} fontSize='medium' color='info' /></Link>

                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    <DeleteForeverIcon fontSize='medium' color='error' onClick={() => {
                                                        let surveyService = new SurveyService()
                                                        surveyService.deleteById(data.id)
                                                        console.log(data.id)
                                                        loadUser()


                                                    }} />
                                                </IconButton>

                                            </CardActions> </Typography>



                                    </Card>


                                </Stack>

                            )}




                        </Stack>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {last === false &&
                                <Button size='large' startIcon={<ArrowForwardIosTwoToneIcon />}
                                    onClick={OnClickNext}></Button>}</div>

                    </div>
                </Grid >
                {visible && <AddSurvey></AddSurvey>}

            </Grid>
        </div>

    )
}
