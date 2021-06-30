// Helpers o Utils
function pair(number) {
  return (number % 2 === 0)
}
function calculateArithmeticMean(list) {

  const sumlist = list.reduce(
    function (accumulatedValue = 0, newElement) {
      return accumulatedValue + newElement;
    }
  );

  const averagelist = sumlist / list.length;

  return averagelist;
}
// MEDIUM CALCULATOR
function medianSalary(list) {
  const median = parseInt(list.length / 2);

  if (pair(list.length)) {
    const personMedian = list[median - 1];
    const personMedian2 = list[median];

    const mean = calculateArithmeticMean([personMedian, personMedian2]);
    return mean;
  } else {
    const personMedian = list[median];
    return personMedian;
  }
}
// CALCULATING THE GENERAL MEDIAN
const salary = mexico.map((person) => {
  return person.salary;
});
const salarySorted = salary.sort((salaryA, salaryB) => {
  return salaryA - salaryB
});

const generalMedian = medianSalary(salarySorted);
// MEDIUM TOP 10%


const spliceStart = (salarySorted.length * 90) / 100;
const spliceCount = salarySorted.length - spliceStart;

const salaryTop10 = salarySorted.splice(spliceStart, spliceCount);

const medianTop10 = medianSalary(salaryTop10);

console.log(generalMedian, medianTop10);