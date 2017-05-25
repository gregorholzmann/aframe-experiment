AFRAME.registerComponent('frame-hover', {
    init: function () {
        var el = this.el;
        let colorplate = el.querySelector('.colorplate');

        el.addEventListener('mouseenter', function () {
            console.log('hovered');
            colorplate.setAttribute('visible', true);
        });
        el.addEventListener('mouseleave', function () {
            colorplate.setAttribute('visible', false);
        });
    }
});
