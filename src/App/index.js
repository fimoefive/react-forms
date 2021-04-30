import React, { useState } from 'react';
import { getStudents } from '../helpers/data/studentData';
import StudentCard from '../components/StudentCard';
import StudentForm from '../components/StudentForm';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <>
      <div className='App'>
        <h2>Student Form</h2>
        <StudentForm formTitle="Add Student"
          setStudents={setStudents}
        />
        <hr />
        <div className="card-container">
          {students.map((studentInfo) => (
            <StudentCard
              key={studentInfo.firebaseKey}
              firebaseKey={studentInfo.firebaseKey}
              name={studentInfo.name}
              teacher={studentInfo.teacher}
              grade={Number(studentInfo.grade)}
              setStudents={setStudents}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
