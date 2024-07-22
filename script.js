const btn = document.getElementById('btn');
const birthday = document.getElementById('birthday');
const result = document.getElementById('result');

function calculateAge(){
  const birthdayValue = birthday.value;
  console.log(birthdayValue);
  if(birthdayValue === ''){
    alert('Please enter your birth date')
  }else{
    const age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} years old`;
  }
}

function getAge(birthdayValue){
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if(month<0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
    age--;
  }
  return age;
  
}

btn.addEventListener('click',calculateAge)