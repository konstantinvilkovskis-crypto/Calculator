let buttons = document.querySelectorAll('.buttonNumber')
let bar = document.querySelector('.bar')
for(let i = 0;i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
      bar.value = bar.value + buttons[i].innerHTML
    })
}
let actions = document.querySelectorAll('.buttonAction')
for(let i = 0;i < actions.length; i++){
   actions[i].addEventListener('click',function(){
      if ( ['+','-','*','/','.'].includes(bar.value[bar.value.length -1]) ){
        bar.value[bar.value.length -1] = actions[i].innerHTML
      }
      else if(bar.value == ''){
        if(actions[i].innerHTML == '-'){
          bar.value = bar.value + actions[i].innerHTML
        }
      }
      else{
        bar.value = bar.value + actions[i].innerHTML
      }
      
   })
  
}

let equel = document.querySelector('#enter')
equel.addEventListener('click',function(){
  bar.value = eval(bar.value)
  if(bar.value == 'NaN'){
    bar.value = 'ERROR'
  }
})

let backscape = document.querySelector('#back')
backscape.addEventListener('click',function(){
  bar.value = bar.value.slice(0,-1)
})



