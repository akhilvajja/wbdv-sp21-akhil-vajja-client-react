import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <h1>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
            <i className="fas fa-times float-right"
               onClick={() => history.goBack()}></i>
        </h1>
         <div className="row">
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Bootstrap
                            <i className="fa fa-times fa-2x fa-pull-right"></i>
                        </li>
                        <li className="list-group-item active">
                            JavaScript
                            <i className="fa fa-times fa-2x fa-pull-right"></i>
                        </li>
                        <li className="list-group-item">
                            HTML
                            <i className="fa fa-times fa-2x fa-pull-right"></i>
                        </li>
                        <li className="list-group-item">
                            Node.js
                            <i className="fa fa-times fa-2x fa-pull-right"></i>
                        </li>
                        <li className="list-group-item">
                            React.js
                            <i className="fa fa-times fa-2x fa-pull-right"></i>
                        </li>
                        <li className="list-group-item">
                            MYSQL
                            <i className="fa fa-times fa-2x fa-pull-right"></i>
                        </li>
                        <li className="list-group-item">
                            jQuery
                            <i className="fa fa-times fa-2x fa-pull-right"></i>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-plus fa-2x fa-pull-right"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-8">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-plus fa-lg"></i>
                            </a>
                        </li>
                    </ul>
                    <br/>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 4</a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>


// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor