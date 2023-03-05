let myH1 = document.createElement("h1");
myH1.textContent="Download Aplikasi Kami";
myH1.setAttribute ("class", "myH1");
document.body.append(myH1); 

let myH3 = document.createElement("h3");
myH3.textContent="Close";                   
myH3.setAttribute ("class","myH3");
myH3.classList.add("myH3_color");
document.body.append(myH3); 
                                  
// const apa = document.querySelector('halaman_profil');
// halaman_profil.append(myH3);

 
// apa.append(myH1);
// apa.append(myH3);

// myH3.onclick = function () {
//   myH3.remove()
//   myH1.remove()
// }


// Get all elements with class="close"
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