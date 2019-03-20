// register our component
AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            console.log(ev.detail)

            // if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
            //     // const entity = document.querySelector('#animated-model');
            //     // const scale = entity.getAttribute('scale');
            //     // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);

            //     // // every click, we make our model grow in size
            //     entity.setAttribute('scale', scale);
            // }
        });
}});
