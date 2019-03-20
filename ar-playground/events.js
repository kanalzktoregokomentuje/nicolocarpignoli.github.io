AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            console.log('click in', ev.x, ev.y)
            console.log(document.querySelector('#animated-marker').object3D.position)
            console.log(document.querySelector('#animated-model').object3D.position)
        });
}});
