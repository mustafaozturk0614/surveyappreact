import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({ index, order }) {
    let name1 = "row-radio-buttons-group"
    return (



        <FormControlLabel value={order} control={<Radio />} label={index} />

    );
}


// {<div>


// {template.questions.map((data, index) => <div key={index} className="form-check form-check-inline" style={{ display: "flex" }}>{
//   data.types == 2 && parseInt(data.orderNo) == parseInt(order) ? list.map((d, index) => <div style={{ display: "flex" }}>
//     {d}
//     {/* <Rat count={count} index={d.index} ></Rat> */}
//   </div >) : ""

// } </div >


// )}

// </div > }