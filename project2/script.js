const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function (e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value) 
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
        
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
        
    }
    else {
      const bmi = (weight / ((height*height)/10000)).toFixed(2)
      // show the result
      if (bmi < 18.6) {
        result.innerHTML = `<span>Under weight : ${bmi}</span`;
      }
      if (bmi < 18.6) {
        result.innerHTML = `<span>Under weight : ${bmi}</span`;
      }
      if (bmi > 18.6 && 24.9) {
        result.innerHTML = `<span>Normal Range : ${bmi}</span`;
      }
      if (bmi > 24.9) {
        result.innerHTML = `<span>Overweight  : ${bmi}</span`;
      }
    }
})