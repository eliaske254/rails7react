import * as React from 'react'
import { useState, useEffect } from "react";
import * as ReactDOM from 'react-dom'
import QuestionDetail from "./QuestionDetail";
import EmptyQuestionMessage from "./EmptyQuestionMessage";

const QuestionList = () => {

    const questionTags = [
        { label: 'All', value: 0 },
        { label: 'Tailwind', value: 1 },
        { label: 'Ruby', value: 2 },
        { label: 'Rails', value: 3 },
        { label: 'React', value: 4 },
        { label: 'JavaScript', value: 4 }
    ]

    const [questionsList, setQuestionsList] = useState([])
    const [selectedOption, setSelectedOption] = useState(questionTags[0].value)
    const questionsUrl = 'http://localhost:3000/api/v1/questions'
    const fetchQuestionList = () => {
        fetch(questionsUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
            })
    }
    useEffect(() => {
        fetchQuestionList()
    }, [])

    const updateSelectedItem = (event) => {
        setQuestionsList([])
        setSelectedOption(event.target.value)
        fetch(questionsUrl + `?tags=${questionTags[event.target.value].label}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
            })
    }
    return(
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <p className="lead fw-bold">Filter Questions by Tags</p>
                <select className="form-select form-select-lg" value={selectedOption} onChange={event => updateSelectedItem(event)}>
                    {questionTags.map(tag => (
                        <option key={tag.value} value={tag.value}>{tag.label}</option>
                    ))}
                </select>
                { questionsList.length > 0 ?
                    questionsList.map((question) =>
                            <QuestionDetail question={question} key={question.id}/>
                ) : < EmptyQuestionMessage tagname={questionTags[selectedOption].label}/>
                }
            </div>
        </div>
    )
}
export default QuestionList