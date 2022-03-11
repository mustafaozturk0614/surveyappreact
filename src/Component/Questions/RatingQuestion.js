import React, { useEffect } from 'react'

function RatingQuestion(props) {

  const { count, OnChange, singleQuestion } = props


  const print = () => {

    for (let index = singleQuestion.min; index < singleQuestion.max; index++) {


      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name={count} id="inlineRadio1"
          value="option1" />
        <label className="form-check-label" htmlFor="inlineRadio1">{index}</label>
      </div>



    }
  }


  const a = print()

  useEffect(() => {
    console.log(singleQuestion.min)

    console.log(singleQuestion.max)

  }, [singleQuestion])
  return (


    <div>
      <div className="mx-0 mx-sm-auto">
        <div className="text-center">
          <p>
            <strong>{singleQuestion.title}</strong>
          </p>
        </div>


        <div className="text-center mb-3" >
          <div className="d-inline mx-3" >
            {singleQuestion.start}
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={count} id="inlineRadio1"
              value="option1" />
            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={count} id="inlineRadio1"
              value="option1" />
            <label className="form-check-label" htmlFor="inlineRadio1">2</label>
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={count} id="inlineRadio1"
              value="option1" />
            <label className="form-check-label" htmlFor="inlineRadio1">3</label>
          </div>

          <div className="d-inline me-4">
            {singleQuestion.finish}
          </div>
        </div>

      </div>
    </div >
  )

}
export default RatingQuestion