import React, {useState, useEffect} from 'react'
import {updateWidget} from "../../services/widget-service";

const ParagraphWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <select onChange={(f) =>
                    setWidget(widget => ({...widget, type: f.target.value}))} className="form-control">
                    <option value="PARAGRAPH" selected>Paragraph </option>
                    <option value="HEADING">Heading </option>
                    <option value="LIST">List </option>
                    <option value="IMAGE">Image </option>
                </select>
            }
            <h3>Paragraph Widget</h3>
            {
                editing &&
                <textarea
                    onChange={(e) => setWidget({...widget, text: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </div>
    )
}

export default ParagraphWidget