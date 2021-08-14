$(function(){
  // This For Open Navbar in Mobile Screen When Click On Bars Btn
  var body = $('body');
  $('.navbar-toggler').click(function(){
    body.addClass('show-nav')
  });

  // This For Close Navbar in Mobile Screen When Click On CLose btn
  $('.navMobile .icon-close2').click(function(){
    body.removeClass('show-nav')
  });

  // This For Close Navbar in Mobile Screen When Click On body
  $(document).click(function(e){
    if( $(e.target).hasClass('navbar') ) body.removeClass('show-nav')
  });


  //- This For Fixed Navbar When Scrolled 
  $(window).scroll(function(){
    if( $('html').scrollTop() >= 100 ) 
      $('nav.navbar').addClass('fixed')
    else $('nav.navbar').removeClass('fixed')
  });


  // This For Sub DropDownMenu In Large Screen
  $('.dropdown-menu a.dropdown-toggle').on('click', function() {

    // This For Show Next Child DropDown Menu In Large Screen
    $(this).next('.dropdown-menu').toggleClass('show');

  // This For Hide All child Dropdown Menu After Hide Parent Dropdown In Large Screen
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown .show').removeClass('show');
    });

  return false;
});


  $(document).on('click', function(e){
    console.log(e.target);
  });

});