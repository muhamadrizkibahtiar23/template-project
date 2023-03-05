let myH1 = document.createElement("h1");
myH1.textContent="Download Aplikasi Kami";
myH1.setAttribute ("class", "myH1");
document.body.append(myH1); 



const anchor1 = document.createElement ('a');
const anchor2 = document.createElement ('a');
anchor1.href= 'https://play.google.com/';
anchor2.href= 'https://www.apple.com/id/app-store/';
anchor1.innerHTML= 'Play Store';
anchor1.setAttribute ("class", "anchor1");
anchor2.innerHTML= 'App Store';
anchor2.setAttribute ("class", "anchor2");

myH1.addEventListener('click',function(){
  
  document.body.append(anchor1,anchor2);
 
});

anchor1.addEventListener('click',function(){
  
  localStorage.setItem('username1', 'email1');

});

anchor2.addEventListener('click',function(){

  localStorage.setItem('username2', 'email2');

});

let myH3 = document.createElement("h3");
myH3.textContent="Close";
myH3.setAttribute ("class", "myH3");
myH3.classList.add("myH3_color");                                                                                                                        
document.body.append(myH3); 

// Get all elements with class="myH3"
var closebtns = document.getElementsByClassName("myH3");
var i;

// Loop through the elements, and hide the parent, when clicked on
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    // this.parentElement.style.display = 'none';
  myH3.remove()
  myH1.remove()
  });
}
                                  
document.getElementById('toggle').onclick= function (){
  if (document.getElementById('toggle').innerHTML ==='Light'){
    document.getElementById('toggle').innerHTML ='Dark'
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  } else{
    document.getElementById('toggle').innerHTML ='Light'
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }                                                                                                       
}

localStorage.setItem("nama","joko")
document.getElementsByClassName("anchor1").innerHTML=localStorage.
getItem("nama")

