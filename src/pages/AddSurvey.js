import React, { useContext, useEffect, useState } from 'react';
import { Drawer, Button, Divider, Form, Row, Col, DatePicker, Result } from 'antd';
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router';
import SurveyContext from '../Context/SurveyContext';
import { DataArraySharp, Label, Rowing } from '@mui/icons-material';
import { FormLabel, TextField } from '@material-ui/core';
import SurveyService from './surveyService';
import CourseService from '../services/CourseService';
import CourseContext from '../Context/CourseContext';
import { convertTimestampToDate, convertDateToTimestamp } from '../utils/DateConvert';
const { Option } = Select;
const AddSurvey = () => {
    const { visible, setVisible, survey, setSurvey, postSurvey, setPostSurvey, page, setPage } = useContext(SurveyContext);
    const [courseList, setCoureslist] = useState()
    const { course, setCourse } = useContext(CourseContext)
    const [singleCourse, setSingleCourse] = useState({})
    const [teacher, setTeacher] = useState({
        personName: {
            firstName: '',
        }
    })
    let navigate = useNavigate();

    const [startTime3, setStartDate] = useState()
    const [time, setTime] = useState({
        startTime: '',
        finishTime: ''
    })
    const [courseName, setCourseName] = useState();
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    function onChange(e) {
        console.log(e.target);

        let surveyService = new SurveyService
        surveyService.findByTitle(e).then(result => setSurvey(predta => ({ ...result.data })))
        console.log(survey)

    }
    const onChangeCourses = (e) => {
        console.log(e)


        let name = e.trim()
        setCourseName(...name)
        let courseService = new CourseService()
        courseService.getByName(name).then(result => {
            setSingleCourse(result.data)
            console.log(result.data)
            getTeacher(result.data.masterTrainer.id)
        })

        console.log(teacher)
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    const { content, last, first } = page
    useEffect(() => {

        let courseService = new CourseService()
        courseService.getCourses().then(result => {
            setCoureslist(result.data)
            setCourse(result.data)
            setSingleCourse(result.data[0])
            console.log(course)
        })





    }, [])
    useEffect(() => {


        console.log(survey)


    }, [survey])

    const onSubmit = () => {
        console.log(singleCourse)

        let temp = {

            startTime: time.startTime,
            finishTime: time.finishTime,
            courseid: singleCourse.id,
            sequenceNumber: survey.sequenceNumber,
            templateId: survey.id,
            title: survey.title

        }
        let surveyservice = new SurveyService()
        setPostSurvey(preTemplate => ({ ...postSurvey, courseId: singleCourse.id }))
        setSurvey(preTemplate => ({ ...survey, ...temp }))
        console.log(temp)
        surveyservice.createSurvey(temp)

        navigate('/')

    }

    const getTeacher = (e) => {
        let courseService = new CourseService()
        courseService.getByTeacher(e).then(result => {
            setTeacher(result.data)

        })

    }
    const { RangePicker } = DatePicker;
    return (
        <>

            <Drawer style={{ marginTop: 50 }} title="Add Survey" placement="right" onClose={onClose} visible={visible}>
                <h5> Tempale Information </h5>
                <p>  Template Name :  {survey.title} </p>
                <p> Created Date {convertTimestampToDate(survey.createdDate)}</p>
                <p> Version: v0{survey.version}</p>
                <Divider></Divider>
                <h5> Course Information </h5>
                <p>  Course Name :{singleCourse.name} </p>
                <p>  Teacher Name: {teacher.personName.firstName}</p>

                <Divider></Divider>
                <Form layout='horizontal'>
                    <Row>

                        <Col>
                            <FormLabel style={{ paddingRight: 10 }}>Templates</FormLabel>

                            <Form.Item>

                                <Select
                                    name="templates"
                                    showSearch
                                    placeholder=""
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}

                                    value={survey.title}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

                                    }
                                    size='large'
                                    style={{ width: 150 }}
                                >
                                    {
                                        content.map((data, index) => <Option key={data.id} value={data.title}>{data.title}</Option>)
                                    }



                                </Select>
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormLabel style={{ paddingRight: 10 }}>Courses</FormLabel>
                            <Form.Item >

                                <Select
                                    name='courses'
                                    showSearch
                                    placeholder=""
                                    optionFilterProp="children"
                                    onChange={onChangeCourses}
                                    onSearch={onSearch}

                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

                                    }
                                    onClick={(e) => {

                                        setCourseName(e.name)
                                        console.log(courseName)

                                    }}
                                    size='large'
                                    style={{ width: 150 }}
                                >
                                    {course.length > 0 ?
                                        course.map((data, index) => <Option key={data.id} value={data.name}>{data.name}</Option>) : "aa"
                                    }

                                </Select>

                            </Form.Item>
                        </Col>

                    </Row>
                    <Row>
                        <Col>

                        </Col>

                    </Row>
                    <RangePicker onChange={(e) => {

                        setTime({
                            startTime: e[0]._d,
                            finishTime: e[1]._d

                        })


                    }} size='middle' />

                </Form>
                <Button >Cancel</Button>
                <Button onClick={onSubmit} type="primary"> Submit</Button>
            </Drawer>

        </>
    );
};
export default AddSurvey