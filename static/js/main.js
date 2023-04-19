(function(){
  // Create mobile nav menu (see .js-nav, .js-nav-toggle, and .js-nav-close in main.css)
  var mainNav = document.getElementById('main-nav');
  if (mainNav) {
    // Add classname to body
    document.body.classList.add('js-nav');// Hides .main-nav by default
    // Create .js-nav-toggle to toggle the display of nav
    var navToggle = document.createElement('div');
    navToggle.className = 'js-nav-toggle';
    var navToggleLink = document.createElement('span');
    navToggleLink.appendChild(document.createTextNode('Menu'));
    navToggleLink.addEventListener('click', function(e){
      e.preventDefault();
      document.body.classList.toggle('show-nav');
    });
    navToggle.appendChild(navToggleLink);
    // Insert .js-nav-toggle before .main-nav
    mainNav.parentNode.insertBefore(navToggle, mainNav);
    // Create .js-nav-close to close nav
    var navClose = document.createElement('div');
    navClose.className = 'js-nav-close';
    var navCloseLink = document.createElement('span');
    navCloseLink.appendChild(document.createTextNode('Close'));
    navCloseLink.addEventListener('click', function(e){
      e.preventDefault();
      document.body.classList.remove('show-nav');
    });
    navClose.appendChild(navCloseLink);
    // Insert .js-nav-close as the first child of .main-nav
    mainNav.prepend(navClose);
  }
  /*
  Result:
  <body class="js-nav">
    ...
    <div class="js-nav-toggle"><span>Menu</span></div>
    <nav id="main-nav" class="main-nav">
      <div class="js-nav-close"><span>Close</span></div>
      <ul>...
  */
}());
