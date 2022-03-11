import React from 'react'

export default function Rat({ count, index }) {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={count} id="inlineRadio1"
                value="option1" />
            <label className="form-check-label" htmlFor="inlineRadio1">{index}</label>
        </div>
    )
}
