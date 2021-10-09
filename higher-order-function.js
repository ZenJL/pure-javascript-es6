const grades = [
  {name: 'John', grade: 8, sex: 'M'},
  {name: 'Sarah', grade: 12, sex: 'F'},
  {name: 'Bob', grade: 16, sex: 'M'},
  {name: 'Johnny', grade: 2, sex: 'M'},
  {name: 'Ethan', grade: 4, sex: 'M'},
  {name: 'Paula', grade: 18, sex: 'F'},
  {name: 'Donald', grade: 5, sex: 'M'},
  {name: 'Jennifer', grade: 13, sex: 'F'},
  {name: 'Courtney', grade: 15, sex: 'F'},
  {name: 'Jane', grade: 9, sex: 'F'},
];

/* === find average of Male === */
const itemsMale = grades.filter(item => item.sex === "M");
const totalGradeMale = itemsMale.reduce((acc, curr) => {
  return acc + curr.grade;
}, 0)
const averageMale = totalGradeMale / itemsMale.length
console.log('averageMale: ', averageMale);


/* === find average of Female === */
const itemsFemale = grades.filter(item => item.sex === "F");
const totalGradeFemale = itemsFemale.reduce((acc, curr) => {
  return acc + curr.grade;
}, 0)
const averageFemale = totalGradeFemale / itemsFemale.length
console.log('averageFemale: ', averageFemale);

/* === find max grade of Male === */
const gradeOfMale = itemsMale.map(item => item.grade);
const maxGradeOfMale = Math.max(...gradeOfMale);
console.log('max grade of Male: ', maxGradeOfMale);


/* === find max grade of Female === */
const gradeOfFemale = itemsFemale.map(item => item.grade);
const maxGradeOfFemale = Math.max(...gradeOfFemale);
console.log('max grade of Female: ', maxGradeOfFemale);


/* === HOF === */
const isMale = student => student.sex === 'M';
const isFemale = student => student.sex === 'F';
const males = grades => grades.filter(isMale); // -> array
const females = grades => grades.filter(isFemale);

const averageHOF = grades => {
  const average =  grades.reduce((acc, curr) => {
    return acc + curr.grade
  }, 0)

  return average / grades.length;
}
const malesAverage = averageHOF(males(grades));
const femalesAverage = averageHOF(females(grades));

console.log("malesAverage HOF: ", malesAverage)
console.log("femalesAverage HOF: ", femalesAverage)