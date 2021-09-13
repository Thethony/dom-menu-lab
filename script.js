// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
// main element named MainEL
const mainEl = document.querySelector('main');
// background of main element
mainEl.style.backgroundColor = 'var(--main-bg)';
// header of main element set to SEI ROCKS!
mainEl.innerHTML = '<h1>SEI ROCKS!</h>';
// ADD CLASS OF FLEX-CTR TO MAINEL
mainEl.classList.add('flex-ctr');
// top menu elment
const topMenuEl = document.getElementById('top-menu');
// height of top menu to 100%
topMenuEl.style.height = ('100%');
// background color of top menu
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// add class flex-around to top menu
topMenuEl.classList.add('flex-around');
// iterate over menuLinks for each object
menuLinks.forEach(function(obTag){
const aEl = document.createElement('a');
aEl.setAttribute('href', obTag.href);
aEl.textContent = obTag.text;
topMenuEl.appendChild(aEl);
return;
});
