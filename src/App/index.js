import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/studentData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then(setStudents);
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
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
          students={students}
          setStudents={setStudents}
        />
      </Router>
    </>
  );
}

export default App;
