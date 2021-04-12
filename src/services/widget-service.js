import React, {useState, useEffect} from 'react'

const WIDGETS_URL = process.env.REACT_APP_WIDGET_URL


    export const createWidget = (tid, widget) => {
        // TODO: move all server communication to widgets-service
        fetch(`${WIDGETS_URL}/topics/${tid}/widgets`, {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                "content-type": 'application/json'
            }
        })
            .then(response => response.json());
    }

    export const deleteWidget = (id) =>
        // TODO: move all server communication to widgets-service.js
        fetch(`${WIDGETS_URL}/widgets/${id}`, {
            method: "DELETE"
        }).then(response => response.json());

    export const updateWidget = (id, widget) =>
        // TODO: move all server communication to widgets-service.js
        fetch(`${WIDGETS_URL}/widgets/${id}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                "content-type": 'application/json'
            }
        }).then(response => response.json());
    export const findWidgetsForTopic = (tid) =>
        fetch(`${WIDGETS_URL}/${tid}/topics`)
        .then(response => response.json());

const api = {
    createWidget, findWidgetsForTopic, deleteWidget, updateWidget
}

export default api;