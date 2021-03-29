// Write your tests here!
const findStudentScoreByName = require('../src/solution.js');
const expect = require("chai").expect;

describe("findStudentScoreByName", () => {
    it("should return the score associated with student", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        for(let student of students){
            const result = findStudentScoreByName(students, student.name);
            expect(result).to.equal(student.score);
        }
    });

    it("if not found, return null", () => {
        const name = 'Daniel Lechok';
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const result = findStudentScoreByName(students, name);
        expect(result).to.equal(null);
    });
});