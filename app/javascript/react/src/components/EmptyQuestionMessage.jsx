import * as React from 'react'
import * as ReactDOM from 'react-dom'

const EmptyQuestionMessage = (props) => {
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Whoops!</strong> No questions found with that tag: {props.tagname}. Please select another option from the list.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    )
}

export default EmptyQuestionMessage