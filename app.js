const navSlide = () => {
  const burger = document.querySelector('.burger');
  const burgerDiv = document.querySelector('.burger-div')
  const navItems = document.querySelector('.nav-items');
  const anchorLogo = document.querySelector('.anchor-logo');
  const welcome = document.querySelector('#welcome');
  const anchorIn = document.querySelector('#anchorIn');
  const navPortfolio = document.querySelector('#nav-portfolio');
  const navAbout = document.querySelector('#nav-about');
  const navContact = document.querySelector('#nav-contact');


  burger.addEventListener('click', () => {
    navItems.classList.toggle('nav-active-left');
    anchorLogo.classList.toggle('nav-active-right');
    welcome.classList.toggle('display-none');
    anchorIn.classList.toggle('display-none');
    burgerDiv.classList.toggle('burger-blk');

    setTimeout(showNavPortfolio, 800);
    setTimeout(showNavAbout, 1000);
    setTimeout(showNavContact, 1200);
  });

  function showNavPortfolio() {
    navPortfolio.classList.toggle('nav-active-left');
  }
  
  function showNavAbout() {
    navAbout.classList.toggle('nav-active-left');    
  }
  
  function showNavContact() {
    navContact.classList.toggle('nav-active-left');
  }
}

navSlide();

// Projects section

const projectImg = document.querySelector('.project-img');
const projectLink = document.querySelector('.link');

projectImg.addEventListener('mouseover', mOver, false);
projectImg.addEventListener('mouseout', mOut, false);

function mOver() {
  projectLink.classList.add('active');
}

function mOut() {
  projectLink.classList.remove('active');
}
