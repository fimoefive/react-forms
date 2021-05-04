import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import SingleStudentCard from '../components/SingleStudentCard';
import { getSingleStudent } from '../helpers/data/studentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then(setStudent);
  }, []);

  return (
    <div>
      {/* <SingleStudentCard student={student}>
        <h2>{student.name}</h2>
        <h3>{student.teacher}</h3>
        <h3>{student.grade}</h3>
      </SingleStudentCard> */}
      {student.name}
    </div>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.string
};
