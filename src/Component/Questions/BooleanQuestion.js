import React, { useContext, useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector } from 'react-redux';
import QuestionContext from '../../Context/QuestionContext';
import * as Type from '../../utils/QuestionTypes'
import SurveyContext from '../../Context/SurveyContext';
function BooleanQuestion(props) {
  const { count, order, dbTemplate } = props



  const { template, setTemplate } = useContext(SurveyContext)
  const [value, setValue] = useState('female');

  const changeList = () => {


    return template.questions


  }
  let list = changeList()

  const handleChange = (event) => {
    setValue(event.target.value);

  };
  const onsubmit = (e) => {
    e.preventDefault()
    console.log(value)

  }
  useEffect(() => {
    console.log(dbTemplate)

  }, [])




  return (
    <FormControl>

      <FormLabel id="demo-controlled-radio-buttons-group">


        {list.map((data, index) => <div key={index}>{
          data.types === Type.TWO_OPTIONS && parseInt(data.orderNo) === parseInt(order) ? data.title : ""

        }</div>


        )}   </FormLabel>
      <RadioGroup>
        <FormControlLabel name={count} control={<Radio />} label={list.map((data, index) => <div key={index}>{
          data.types === Type.TWO_OPTIONS && parseInt(data.orderNo) == parseInt(order) && data.option.length > 0 ? data.option[data.option.length - 2] : ""
        }</div>
        )} />
        <FormControlLabel name={count} value="male" control={<Radio />} label={list.map((data, index) => <div key={index}>{
          data.types === Type.TWO_OPTIONS && parseInt(data.orderNo) == parseInt(order) && data.option.length > 0 ? data.option[data.option.length - 1] : ""

        }</div>


        )} />
      </RadioGroup>

    </FormControl >
  );

}
export default BooleanQuestion