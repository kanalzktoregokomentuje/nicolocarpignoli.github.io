AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            console.log('click in point', ev.detail.intersection.point )
            console.log('click in object', ev.detail.intersection.object)

            console.log(document.querySelector('#animated-marker').object3D.position)
            console.log(document.querySelector('#animated-model').object3D.position)
        });
}});
