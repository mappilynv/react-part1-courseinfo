const App = () => {
  {/* Header takes care of rendering the name of the course */}
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1> 
      </div>
    )
  }
  {/* Refactor the Content component so that it does not render any names of parts or their number of exercises by itself */}
  const Part = (props) => {
    return(
      <p>{props.part} {props.total}</p>
    )
  };

  {/* Content renders the parts and their number of exercises */}
  const Content = () => {
    return (
      <div>
        <Part part={part1} total={exercises1}/>
        <Part part={part2} total={exercises2}/>
        <Part part={part3} total={exercises3}/>
      </div>
    )
  }

  {/* Total renders the total number of exercises. */}
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>    
      </div>
    )
  }

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App;
