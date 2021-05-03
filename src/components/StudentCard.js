import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteStudent } from '../helpers/data/studentData';

const StudentCard = ({
  firebaseKey,
  name,
  grade,
  teacher,
  setStudents
}) => {
  const handleClick = () => {
    deleteStudent(firebaseKey)
      .then((studentArray) => setStudents(studentArray));
  };

  return (
    <Card body>
      <CardTitle tag="h5">Name: {name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
    </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
