import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup, Input, Label
} from 'reactstrap';
import { addStudent, updateStudent } from '../helpers/data/studentData';

const StudentForm = ({
  formTitle,
  setStudents,
  name,
  teacher,
  grade,
  firebaseKey
}) => {
  const [student, setStudent] = useState({
    name: name || '',
    teacher: teacher || '',
    grade: grade || '',
    firebase: firebaseKey || null
  });

  const handleInput = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firebaseKey) {
      updateStudent(student).then(setStudents);
    } else {
      addStudent(student).then((response) => {
        setStudents(response);
        history.push('/students');
      });

      // Clears Input Fields
      setStudent({
        name: '',
        teacher: '',
        grade: '',
        firebaseKey: null
      });
    }
  };

  return (
    <>
      <div className='student-form'>
        <Form
          id='addStudentForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>

          <FormGroup>
            <Label>NAME:</Label>
            <Input
              name='name'
              id='name'
              value={student.name}
              type="text"
              placeholder="Enter a Student Name"
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <Label>Teacher:</Label>
            <Input
              name='teacher'
              id='teacher'
              value={student.teacher}
              type='text'
              placeholder='Enter Teacher Name'
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <Label>Grade: </Label>
            <Input
              name='grade'
              id='grade'
              value={student.grade}
              type='number'
              placeholder='Enter Grade'
              onChange={handleInput}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
  firebaseKey: PropTypes.string,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number
};

export default StudentForm;
