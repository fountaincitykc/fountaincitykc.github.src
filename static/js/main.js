(function(){
  // Create mobile nav menu (see .js-nav and .nav-toggle in main.css)
  var mainNav = document.getElementById('main-nav');
  if (mainNav) {
    var isNavShowing = false;
    // Add classname to body
    document.body.className += ' js-nav';// hides .main-nav
    var bodyClassName = document.body.className;
    // Create anchor link to toggle the display of .main-nav
    var toggle = document.createElement('a');
    toggle.appendChild(document.createTextNode('Menu'));
    toggle.href = '#';
    toggle.addEventListener('click', function(e){
      e.preventDefault();
      document.body.className = isNavShowing ? bodyClassName : bodyClassName + ' show-nav';
      isNavShowing = ! isNavShowing;
    });
    // Create .nav-toggle
    var navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.appendChild(toggle);
    // Insert .nav-toggle before .main-nav
    mainNav.parentNode.insertBefore(navToggle, mainNav);
    // Create close link
    var close = document.createElement('a');
    close.appendChild(document.createTextNode('Close'));
    close.href = '#';
    close.className = 'close';
    close.addEventListener('click', function(e){
      e.preventDefault();
      document.body.className = bodyClassName;
      isNavShowing = false;
    });
    // Insert close as a child of .main-nav
    mainNav.prepend(close);
  }
  /*
  Result:
  <body class="js-nav">
    ...
    <div class="nav-toggle"><a href="#">Menu</a></div>
    <nav id="main-nav" class="main-nav">
      <a href="#" class="close">Close</a>
      <ul>...

  */
}());
