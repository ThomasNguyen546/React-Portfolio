import React from 'react';

function Project (props) {
  return (
    <div className="grid-item" style={props.style}>
      <div class="projectName" className="project-info">
        <a href={props.liveUrl} target="_blank" className="project-title">{props.name}</a>
        <br></br>
        <br></br>
        <a href={props.gitUrl} target="_blank">
          <h1 class="github">Github Repository</h1>
        </a>
      </div>
    </div>
  )
}

export default Project;