// export default function ToDo({ task }) {
//     return (
//         <li>Task: {task} </li>
//     )
// }


// conditional  rendering option: 1
// export default function ToDo({ task, isDone }) {
//     if (isDone === true) {
//         return (
//             <li>Finish: {task} </li>
//         )
//     }
//     else {
//         return (
//             <li>Work on: {task} </li>
//         )
//     }
// }
// conditional  rendering option: 2
// export default function ToDo({ task, isDone }) {
//     if (isDone) {
//         return (
//             <li>Finish: {task} </li>
//         )
//     }
//     return (
//         <li>Work on: {task} </li>
//     )
// }

// conditional  rendering option: 3 ternary oparetor
// export default function ToDo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'finished' : 'Do it'} Task: {task} </li>
//     )
// }


// conditional  rendering option: 4 logical && oparetor 

// export default function ToDo({ task, isDone }) {
//     return (
//         <li>{isDone && 'Done'} Task: {task} </li>
//     )
// }


// conditional  rendering option: 5 logical || oparetor 

export default function ToDo({ task, isDone }) {
    return (
        <li>{isDone || 'Do it'} Task: {task} </li>
    )
}