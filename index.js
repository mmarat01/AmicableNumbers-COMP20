const firstNum = document.getElementById("firstNum");
const secondNum = document.getElementById("secondNum");
const result = document.getElementById("result");
const button = document.getElementById("checkButton");

const isFactor = (num, factor) => {
  return num % factor === 0;
};

const computeFactors = (num) => {
  let factors = [];
  let largestFactor = Math.floor(num / 2);
  for (let i = 0; i < largestFactor + 1; i++) {
    if (isFactor(num, i)) {
      factors.push(i);
    }
  }
  return factors;
};

const printFactors = (factors) => {
  let factorPrint = "";
  factors.forEach((factor) => (factorPrint += `${factor} `));
  result.innerHTML += `${factorPrint} <br /> `;
};

const addFactors = (factors) => {
  let sum = 0;
  factors.forEach((factor) => (sum += factor));
  result.innerHTML += `The factors sum is ${sum} <br/><br/>`;
  return sum;
};
button.addEventListener("click", () => {
  let num1 = null;
  let num2 = null;

  num1 = parseInt(firstNum.value);
  num2 = parseInt(secondNum.value);

  result.innerHTML = `Your numbers are ${num1} and ${num2}... <br/><br/>`;

  let firstNumFactors = computeFactors(num1);
  alert(`${num1}'s factors: ${firstNumFactors.join(" ")}`);
  result.innerHTML += `${num1}'s factors: &nbsp;`;
  printFactors(firstNumFactors);
  let firstFactorSum = addFactors(firstNumFactors);

  let secondNumFactors = computeFactors(num2);
  alert(`${num2}'s factors: ${secondNumFactors.join(" ")}`);
  result.innerHTML += `${num2}'s factors: &nbsp`;
  printFactors(secondNumFactors);
  let secondFactorSum = addFactors(secondNumFactors);

  if (firstFactorSum === num2 && secondFactorSum === num1) {
    result.innerHTML += `<br/> <strong>The numbers: ${num1} and ${num2} are amicable</strong>`;
  } else {
    result.innerHTML += `<br/> <strong>The numbers: ${num1} and ${num2} are not amicable</strong>`;
  }
});
