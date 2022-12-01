import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const NewQuestion = () => {
  const questionTags = [
    { label: "Tailwind", value: 8 },
    { label: "Ruby", value: 9 },
    { label: "Rails", value: 10 },
    { label: "React", value: 11 },
    { label: "JavaScript", value: 12 },
    { label: "Data Structures", value: 13 },
  ];

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState(questionTags[0].valuess);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <div
      className="modal fade"
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Empower other other students by submitting your question!
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label mt-3 mb-3">Title</label>
              <input
                text
                className="form-control form-control-lg rounded-0"
                value={title}
                onChange={(event) => handleTitleChange(event)}
                name="title"
              />
            </div>
            <div className="form-group">
              <label className="form-label mt-3 mb-3">
                Select question tag
              </label>
              <select
                className="form-select form-select-lg rounded-0"
                value={tag}
                onChange={(event) => handleTagChange(event)}
                name="tag"
              >
                {questionTags.map((tag) => (
                  <option key={tag.value} value={tag.value}>
                    {tag.label}
                  </option>
                ))}
              </select>
            </div>
            ...
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Submit Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
