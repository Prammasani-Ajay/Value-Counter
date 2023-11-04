const heading = document.createElement('h1')
const div = document.createElement('div')
const body = document.querySelector('body')
const main = document.createElement('main')
body.appendChild(main)
main.appendChild(div)
div.appendChild(heading)
heading.innerHTML = 'COUNTER'
heading.setAttribute('style','font-size:35px;color:blue')
main.setAttribute('style','text-align:center ;width:75vh;height:40vh;box-shadow: 1px 1px 5px #301934;background-color:lightgrey;font-family:\'Josefin Sans\', sans-serif;padding-top:15px;margin:auto;margin-top:80px;border-radius:12px')
const value = document.createElement('nav')
div.appendChild(value).innerHTML = '0'
value.setAttribute('style','font-size:100px;text-align:center;')
const buttons = document.createElement('div')
main.appendChild(buttons)
const decr_btn = document.createElement("button")
decr_btn.setAttribute('style','width:50px;height:45px;margin-right:10px;background-color:red;border:none;font-size:25px;color:white;cursor:pointer')
const reset_btn = document.createElement('button')
reset_btn.setAttribute('style','padding:10px 20px;background-color:grey;border:none;font-size:22px;color:white;cursor:pointer')
const incr_btn = document.createElement('button')
incr_btn.setAttribute('style','width:50px;height:45px;margin-left:10px;background-color:green;border:none;font-size:25px;color:white;cursor:pointer')
buttons.appendChild(decr_btn).innerHTML = "-"
buttons.appendChild(reset_btn).innerHTML = "Reset"
buttons.appendChild(incr_btn).innerHTML = "+"

// Completed HTML & CSS 
var x = 0;
function decrementFun(){
    let val = (x -= 1)
    if(x<0){
        value.setAttribute('style','font-size:100px;text-align:center;color:red')
    }
    div.appendChild(value).innerHTML = `${val}`
}
function increamentFun(){
    let val1 = (x += 1)
    if(x>0){
        value.setAttribute('style','font-size:100px;text-align:center;color:green')
    }
    div.appendChild(value).innerHTML = `${val1}`
}
function resetFun(){
    x = 0;
    value.setAttribute('style','font-size:100px;text-align:center;color:black')
    div.appendChild(value).innerHTML ="0"
}
reset_btn.addEventListener('click',resetFun)
incr_btn.addEventListener('click',increamentFun)
decr_btn.addEventListener('click',decrementFun)