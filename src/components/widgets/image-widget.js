import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <select onChange={(f) =>
                    setWidget(widget => ({...widget, type: f.target.value}))} className="form-control">
                    <option value="IMAGE" selected>Image </option>
                    <option value="HEADING">Heading </option>
                    <option value="PARAGRAPH">Paragraph </option>
                    <option value="LIST">List </option>
                </select>
            }
            <h3>Image Widget</h3>
            {
                editing &&
                <div>
                    URL
                    <input value={widget.url} className="form-control"/>
                    width
                    <input value={widget.width} className="form-control"/>
                    height
                    <input value={widget.height} className="form-control"/>
                </div>
            }
        </div>
    )
}

export default ImageWidget