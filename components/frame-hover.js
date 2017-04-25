AFRAME.registerComponent('frame-hover', {
    init: function () {
        var el = this.el;
        console.log(el);   
        el.addEventListener('mouseenter', function () {
            console.log(el);                        
        });
    }
});