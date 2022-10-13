
function animate() {
	// body...
 let container = document.querySelectorAll('.content')
  for (var i = 0; i < container.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = container[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
       container[i].classList.add("active");
    } else {
      container[i].classList.remove("active");
    }
  }
}


// ---------To show the navbar on mobile--------------------------------
const menuIcon = document.querySelector('.navbar .nav-list  .menu-icon')
  const navList = document.querySelector('.navbar .nav-list ');
  const navItems = document.querySelector('.navbar .nav-list .nav-items');
  menuIcon.addEventListener('click', function () {
    // body...
      navList.classList.toggle('open')
   this.classList.toggle('active')
  })


 window.addEventListener('scroll', animate)


