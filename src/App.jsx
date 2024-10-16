import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import singers from './Singer';
import Singers from './Singer';

function App() {
  const actors = ['Hasan', 'Probin', 'Gobindo', 'Lanchan', 'hablu', 'Kodom Ali'];

  const singers = [
    { name: 'Kodom Ali', age: 50, phoneNumber: '012454541545' },
    { name: 'Badam Ali', age: 60, phoneNumber: '0165665656' },
    { name: 'Kutub Ali', age: 40, phoneNumber: '0100000000' },
    { name: 'Hasan Ali', age: 36, phoneNumber: '0170540054005' },
    { name: 'Faruk Hossain', age: 45, phoneNumber: '06485456564' },
  ]

  return (
    <>

      <h1>Vite + React</h1>
      {
        actors.map(actor => <Actor name={actor}> </Actor>)
      }


      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }
      <ToDo
        task="Learn React"
        isDone={true}>
      </ToDo>
      <ToDo
        task="Explore core concepts"
        isDone={false}>
      </ToDo>
      <ToDo
        task="Explore JSX"
        isDone={false}>
      </ToDo>

      {/* <Device name="Laptop" price="100"></Device>
      <Device name="IPHone" price="10000"></Device>
      <Device name="Watch" price="1000"></Device>
      <Device name="Maq Book" price="10000"></Device>
      <People></People>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="8" score="88"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  const deviceStyles = {
    border: '5px solid gray',
    padding: '10px ',
    margin: '20px',
    borderRadius: '10px'
  }

  return <h3 style={deviceStyles}>It is a {props.name} Price: {props.price}</h3>
}

function People() {

  return (
    <>
      <h2>Hello world</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero enim esse </p>
    </>
  )
}

function Person() {
  const age = 25;
  const money = 10000;
  const person = { name: 'imran', age: 21 }
  return (
    <div className='person'>
      <h3>I am {person.name} with age: {age}. my money: {money}</h3>
    </div>
  )
}

function Student({ grade = 0, score = 0 }) {
  // console.log(grade, score);

  const studentName = 'rana';
  const studentAge = 20;

  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Name: {studentName}</p>
      <p>Age: {studentAge}</p>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}


function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '10px',
    border: '2px solid yellow',
    borderRadius: '10px'

  }
  // return (
  //   <div style={developerStyle}>
  //     <h3>Hello Habul</h3>
  //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, aliquid.</p>
  //     <p>Lorem ipsum dolor sit amet.</p>
  //   </div>
  // )
  return (
    <div style={{
      margin: '20px',
      padding: '10px',
      border: '2px solid yellow',
      borderRadius: '10px'
    }}>
      <h3>Hello Habul</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, aliquid.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default App
