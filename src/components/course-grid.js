import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

export default class CourseGrid extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/courses/table">
                    <i className="fas fa-2x fa-list float-right"></i>
                </Link>
                <h2>Course Grid {this.props.courses.length}</h2>
                <div className="row">
                    {
                        //courses.map(course =>
                        //  <div className="card" style={{width: "18rem", margin: "15px"}}>
                        //  <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                        //  <div className="card-body">
                        //<h5 className="card-title">{course.title}</h5>
                        // <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        //    the card's content.</p>
                        // <Link to="/editor" className="btn btn-primary">
                        // {course.title}
                        //</Link>
                        //</div>
                        //</div>
                        //)
                        this.props.courses.map(course =>
                            <CourseCard
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                            />)
                    }
                </div>
            </div>)
    }
}