btn1=document.getElementById('btn1')
btn2=document.getElementById('btn2')
nob=document.getElementById('nob')
a=document.getElementById('a')
btn1.addEventListener('click',change1)
btn2.addEventListener('click',change2)
var c =0
function change1(){
    c++
    if(c>0){
        nob.style.color='blue'
    }
    else if(c<0){
      nob.style.color='red'

    }
    else{
      nob.style.color='black'
      
    }
  nob.innerHTML=c


}
function change2(){
    c-- 
    if(c<0){
        nob.style.color='red'
    }
     else if(c>0){
      nob.style.color='blue'
  }
  else{
    nob.style.color='black'
    
  }
  

  nob.innerHTML=c
 
}

a.addEventListener('click',change3)
function change3(){ 
  c=0
  nob.innerHTML=0
  nob.style.color='black'
}


