const initialState = {
    widgets: [
        {title: 'Widget 1', _id: '123'},
        {title: 'Widget 2', _id: '234'},
        {title: 'Widget 3', _id: '345'},
    ]
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if(widget._id !== action.deleteWidget._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget._id === action.updateWidget._id) {
                        return action.updateWidget
                    } else {
                        return widget
                    }
                })
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer