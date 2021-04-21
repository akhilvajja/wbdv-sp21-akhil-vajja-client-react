import React from 'react'

const ListWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <select onChange={(f) =>
                    setWidget(widget => ({...widget, type: f.target.value}))} className="form-control">
                    <option value="LIST" selected>List </option>
                    <option value="HEADING">Heading </option>
                    <option value="PARAGRAPH">Paragraph </option>
                    <option value="IMAGE" >Image </option>
                </select>
            }
            <h3>List Widget</h3>
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input type="checkbox" /> Ordered
                    <br/>
                    List Items
                    <textarea rows={10}
                              onChange={(h) => setWidget({...widget, text: h.target.value})}
                              value={widget.text}
                              className="form-control">
                    </textarea>
                </div>
            }
            {/*<textarea></textarea>*/}
        </div>
    )
}

export default ListWidget