import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";

const TopicPills = (
    {
        topics=[],
        createTopic,
        findTopicsForLesson,
        updateTopic,
        deleteTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        // console.log(courseId)
        findTopicsForLesson(lessonId)
    }, [moduleId, lessonId])
    return(<div>
        <h2>Topic Pills</h2>

        <ul className="nav nav-tabs">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}/>
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: 'New Topic'})
            .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))

    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
    }
})

const pm = connect(stpm, dtpm)

export default pm(TopicPills)