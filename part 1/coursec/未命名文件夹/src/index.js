import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const course = 'Half Stack application development'
  const parts = [{
    'part': 'Fundamentals of React',
    'exercises': 10
  }, {
    'part': 'Using props to pass data',
    'exercises': 7
  }, {
    'part': 'State of a component',
    'exercises': 1
  }]
  

  return (
    <div>
      <Header course={course}></Header>
     {
       parts.map(item=>{
         console.log(item)
         return (<Content part={item.part} exercises={item.exercises}  key={item.part}></Content>)
       })
     }
      <Total total={parts[0].exercises+parts[1].exercises}></Total>
    </div>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return(
  <p>{props.part}{props.exercises}</p>

  )
}
const Total=(props)=>{
  return (
  <p>Number of exercises{props.total}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))