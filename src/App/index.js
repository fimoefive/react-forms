import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import StudentCard from '../components/StudentCard';
import { getStudents } from '../helpers/data/studentData';
import StudentForm from '../components/StudentForm';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        // do something else
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <div className='App'>
        <h2>React Form</h2>
        <StudentForm formTitle="Student Form"
          setStudents={setStudents}
        />
        <hr />
        <div className="card-container">
          {students.map((studentInfo) => (
            <StudentCard
              key={studentInfo.firebaseKey}
              firebaseKey={studentInfo.firebaseKey}
              //  name={studentInfo.name}
              //   teacher={studentInfo.teacher}
              //   grade={Number(studentInfo.grade)}
              setStudents={setStudents}
              {...studentInfo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
