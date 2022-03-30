import React, { useContext, useEffect, useState } from 'react'
import SurveyService from './surveyService'
import { Table, Tag, Space } from 'antd';
import SurveyContext from '../Context/SurveyContext';

const { Column, ColumnGroup } = Table;
export default function Survey() {
    const { postSurvey, setPostSurvey } = useContext(SurveyContext)
    const [list, setList] = useState()

    const getAllSurvey = async () => {
        let surveyService = new SurveyService()
        let response = await surveyService.getSurveys()

        setList([...response.data])
        console.log(response.data)


    }

    useEffect(() => {

        getAllSurvey()
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'strech', width: '100vh', height: '100vh', margin: 50 }}>

            <Table >

                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />

                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <>
                            {tags.map(tag => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>,</div>
    )
}
