AFRAME.registerComponent('handle-hover', {
  init: function () {
    var el = this.el;
    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', '#a442f4');  
    });
    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', '#39BB82');  
    });
  } 
});