AFRAME.registerComponent('frame-hover', {
    init: function () {
        var el = this.el;
        let colorplate = el.querySelector('.colorplate');      
        
        el.addEventListener('mouseenter', function () {
            colorplate.setAttribute('visible', true);
        });
        el.addEventListener('mouseleave', function () {
            colorplate.setAttribute('visible', false);
        });
    }
});