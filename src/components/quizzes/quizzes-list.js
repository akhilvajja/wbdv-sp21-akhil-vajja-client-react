import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const NODES_URL = process.env.REACT_APP_NODE_URL

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: implement this in a separate service file
        fetch(`${NODES_URL}/quizzes`)
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;