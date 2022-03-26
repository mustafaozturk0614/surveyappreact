import React, { useContext, useEffect } from 'react'
import SurveyService from './surveyService'
import { Table, Tag, Space } from 'antd';
import SurveyContext from '../Context/SurveyContext';

const { Column, ColumnGroup } = Table;
export default function Survey() {
    const { postSurvey, setPostSurvey } = useContext(SurveyContext)



    useEffect(() => {
        let surveyService = new SurveyService()
        surveyService.getSurveys().then(result =>
            setPostSurvey(result.data))
        console.log(postSurvey)
    }, [])
    return (
        <div><Table >
            <ColumnGroup title="Name">
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
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
