import './App.css';

const coursesTitleArray: string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

const App = () => {

  return (
    <div className="container">
        <ul className="course-list">

            {coursesTitleArray.map((value:string, index:number) => (
                <li key={index} className="course-item">
                    {value}</li>
            ))}
        </ul>
    </div>
  );
}

export default App




// Тест системи
// import './App.css';
//
// function App() {
//
//   return (
//     <>
//       <ul>
//           <li>Hello</li>
//           <li>Hi</li>
//           <li>Good</li>
//           <li>Day</li>
//           <li>Nice</li>
//       </ul>
//     </>
//   );
// }
//
// export default App
