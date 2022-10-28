import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import QuestionList from "./QuestionList";

class Welcome extends React.Component {
    render() {
        return(
            <div className="container">
                <h1>Welcome to Westwood Tech School!</h1>
                <p className="lead">Are you passionate about tech? Then you have come to the right place!</p>
                <QuestionList />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
    <React.StrictMode>
        <Welcome />
    </React.StrictMode>
)
export default Welcome
