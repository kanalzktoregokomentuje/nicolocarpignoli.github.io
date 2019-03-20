AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            console.log(ev)
            console.log(document.querySelector('#animated-marker').object3D.visible)
            console.log(document.querySelector('#animated-model').object3D.visible)
        });
}});
