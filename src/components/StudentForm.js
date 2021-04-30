import React, { useState } from 'react';
import {
  Button,
  Form,
  Label,
  Input,
  FormGroup
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addStudent } from '../helpers/data/studentData';

function StudentForm({ formTitle, setStudents }) {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0,
  });

  const handleInput = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student).then((studentArray) => setStudents(studentArray));
  };

  return (
    <>
      <div className='student-form'>
        <Form id='addStudentForm' autoComplete='off' onSubmit={handleSubmit}>
          <h2>{formTitle}</h2>
          <FormGroup>
            {/* <label htmlFor="name">Name: </label> */}
            <Label for="name">NAME:</Label>
            <Input name='name'
              id='name'
              type="text"
              placeholder="Enter a Student Name"
              value={student.name}
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <h2>Teacher</h2>
            <Label>Name: </Label>
            <Input name='name' type="text" placeholder="Name"
              value={student.teacher}
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <h2>Grade</h2>
            <Label>Grade: </Label>
            <Input name='name' type="text" placeholder="Grade"
              value={student.grade}
              onChange={handleInput}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
}

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentForm;
