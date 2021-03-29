/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  let ourStudent = students.find(student => student.name === name);
  return ourStudent ? ourStudent.score : null;
}

module.exports = findStudentScoreByName;
