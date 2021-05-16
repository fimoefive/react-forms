import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteStudent } from '../helpers/data/studentData';
import StudentForm from './StudentForm';

const StudentCard = ({
  firebaseKey,
  name,
  teacher,
  grade,
  setStudents
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey)
          .then(setStudents);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/students/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  // function viewStudent() {
  //   history.push(`/student/${firebaseKey}`);
  // }

  return (
    <Card body>
      <CardTitle tag="h5">Name: {name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      <Button color="warning" onClick={() => handleClick('view')}>View Student</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Student'}
      </Button>
      {
        editing && <StudentForm
          formTitle='Edit Student'
          firebaseKey={firebaseKey}
          name={name}
          teacher={teacher}
          grade={grade}
          setStudents={setStudents}
        />
      }
    </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
