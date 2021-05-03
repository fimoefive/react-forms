import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup, Input, Label
} from 'reactstrap';
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
        <Form
          id='addStudentForm'
          autoComplete='off'
          onSubmit={handleSubmit}>
          <h2>{formTitle}</h2>
          <FormGroup>
            {/* <label htmlFor="name">Name: </label> */}
            <Label>NAME:</Label>
            <Input name='name'
              type="text"
              placeholder="Enter a Student Name"
              value={student.name}
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <Label>Teacher: </Label>
            <Input name='teacher'
              type='text'
              placeholder='Enter Teacher Name'
              value={student.teacher}
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <h2>Grade</h2>
            <Label>Grade: </Label>
            <Input name='grade'
              type='number'
              placeholder="Enter Grade"
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
