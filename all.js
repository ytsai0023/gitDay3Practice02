//功能一

function fn1() {
  for (let x = 3; x < 16; x++) {
    for (let y = 1; y < 16; y++) {
      console.log(`${x} * ${y} = ${x * y}`);
    }
  }
}

//功能二
//BMI = 體重(公斤) / 身高2(公尺2)
function calcBMI(h = 0, w = 0) {
  let h_m = h / 100;
  let BMI = (w / Math.pow(h_m, 2)).toFixed(1);
  console.log(BMI);
  return BMI;
}

document.getElementById('calcBMI').addEventListener('click', (e) => {
  e.preventDefault();
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  if (!(height || weight)) return;
  const _BMI = calcBMI(height, weight);
  document.getElementById('result').innerText = _BMI;
});
