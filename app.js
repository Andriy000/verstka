const latinLett=/^.*[a-zA-Z]+.*$/;
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const email = document.getElementById('email');
const names = document.getElementById('nam');
const pass =document.getElementById('pass');
const er = document.getElementById('erors');
let btn =document.getElementById('btn')
let mist =document.querySelectorAll('.input')

function onInputName(){
  if(names.value.match(latinLett)){
  er.innerText ='required';
  names.style.borderColor ='green';

}else{
  er.innerText ='at least one latin Symbol';
  names.style.borderColor ='red';
  btn.className = 'dis'
  btn.disabled =true;

}
}

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}
function onInputEmail() {
	if (isEmailValid(email.value)) {
    email.style.borderColor= 'green'
		er.innerText ='email Accepted'
	} else {
		er.innerText = 'please give us normal email';
    email.style.borderColor= 'red'
    btn.className = 'dis'
    btn.disabled =true;
	}
}
function onInputPass(){
  if(pass.value.match(latinLett)&&
      pass.value.match(/[0-9]/)&&
      pass.value.match(/[!@#$%^&*()]/)&&
      pass.value.length>6){
        pass.style.borderColor ='green'
        btn.className ='able'
        btn.disabled =false;
        er.innerText ='good pass'
      }else{
        pass.style.borderColor ='red'
        er.innerText ='pasword should contain at least 6 characters(number , latin letter and special symbols)'
        btn.className = 'dis'
        btn.disabled =true;
      }
}
names.addEventListener('input' , onInputName);
email.addEventListener('input', onInputEmail);
pass.addEventListener('input',onInputPass);




let tab = function(){
  let tabNav =document.querySelectorAll(".TAB"),
  tabName;

  tabNav.forEach(item=>{
    item.addEventListener('click',selectTabNav)
  });
  function selectTabNav(){
    tabNav.forEach(item => {
      item.classList.remove('is-active');
      item.style.backgroundColor='grey'
      
    });
    this.classList.add('is-active')
    this.style.backgroundColor='orange'
  }
}
tab();
const navTabs =document.querySelectorAll(".tabs>li");
navTabs.forEach((item)=>{
  item.addEventListener('click',()=> {
    navTabs.forEach((item)=>item.classList.remove("is-active"));
    item.classList.add('is-active')
  
  })
})
