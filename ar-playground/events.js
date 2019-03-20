AFRAME.registerComponent('click-listener', {
    init: function() {
        // every click, we make our model grow in size :)
        this.el.addEventListener('click', function(ev){
            // const scale = aEntity.getAttribute('scale');
            // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
            // aEntity.setAttribute('scale', scale);
            console.log('click a frame', ev.detail)
        });
}});

document.querySelector('#animated-model').addEventListener((ev) => {
    console.log('click classico', ev)
});
