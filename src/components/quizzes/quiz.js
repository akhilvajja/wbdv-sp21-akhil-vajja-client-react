import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";

const NODES_URL = process.env.REACT_APP_NODE_URL

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        fetch(`${NODES_URL}/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then(questions => setQuestions(questions))
    },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Quiz;