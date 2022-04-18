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
  {/*const Content = () => {
    return (
      <div>
        <Part part={part1} total={exercises1}/>
        <Part part={part2} total={exercises2}/>
        <Part part={part3} total={exercises3}/>
      </div>
    )
  }*/}

  {/* Total renders the total number of exercises. */}
  {/*const Total = (props) => {
    return (
      <div>
        <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>    
      </div>
    )
  }*/}

  {/*const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14*/}

  {/* 1.3: course information step3*/}
  {/*const Content = () => {
    return (
      <div>
        <Part part={part1.name} total={part1.exercises}/>
        <Part part={part2.name} total={part2.exercises}/>
        <Part part={part3.name} total={part3.exercises}/>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>    
      </div>
    )
  }
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }*/}

  {/*1.4: course information step4*/}
  {/*const Content = () => {
    return (
      <div>
        <Part part={parts[0].name} total={parts[0].exercises}/>
        <Part part={parts[1].name} total={parts[1].exercises}/>
        <Part part={parts[2].name} total={parts[2].exercises}/>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>    
      </div>
    )
  }
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
  */}

  {/*1.5: course information step5*/}
  const Content = () => {
    return (
      <div>
        <Part part={course.parts[0].name} total={course.parts[0].exercises}/>
        <Part part={course.parts[1].name} total={course.parts[1].exercises}/>
        <Part part={course.parts[2].name} total={course.parts[2].exercises}/>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>    
      </div>
    )
  }
  
  const course = { 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total />
    </div>
  )
}

export default App;
