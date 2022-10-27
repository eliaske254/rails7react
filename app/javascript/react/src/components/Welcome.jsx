import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Welcome = () => {
    return(
        <div className="container">
            <h1>Welcome to Westwood Tech School!</h1>
            <p className="lead">Are you passionate about tech? Then you have come to the right place!</p>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(< Welcome/>, document.getElementById('welcome'))
})
export default Welcome
