  $(document).on("click" , "#shopping_cart_bag", function(e){
    var cartBagElement  = $('.cart-nav')
    $.ajax({
    type: 'GET',
    url: '/refresh_cart_bag.js',
    }).done(function () {
    }).fail(function (response) {
    })
  e.preventDefault();
});

$(document).ready(function() {
  $(document).on("click" , ".close-sidebar-btn", function(e){
    $("#js-drawer").toggleClass("active")
    $('.main-layout-section .overlay').removeClass("active");
    $('.cart-sidebar-wrapper .overlay').removeClass("active");
    $(".add-to-cart-button").removeAttr("disabled");
    $('body').toggleClass("hide-scroll");
  e.preventDefault();
  });

  $('.cart-sidebar-wrapper .overlay').on('click', function(e) {
    $('.nav-cart').toggleClass("active");
    $('.cart-sidebar').toggleClass("active");
    $('.cart-sidebar-wrapper .overlay').toggleClass("active");
    $('body').removeClass("hide-scroll");
    e.preventDefault();
  });

});
$(document).on("click",function() {
  var  dropdownContainer = $("#js-drawer")[0]
  if(dropdownContainer != null && (dropdownContainer  !== event. target && ! dropdownContainer.contains(event. target))){
    if($("#js-drawer").hasClass("active")){
      $("#js-drawer").toggleClass("active")
      $('.main-layout-section .overlay').removeClass("active");
      $('.cart-sidebar-wrapper .overlay').removeClass("active");
      $(".add-to-cart-button").removeAttr("disabled");
      $('body').toggleClass("hide-scroll");
    }
  }
});