AFRAME.registerComponent('cursor-listener', {

    init: function() {
        // every click, we make our model grow in size :)
        this.el.addEventListener('click', function(){
            // const scale = aEntity.getAttribute('scale');
            // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
            // aEntity.setAttribute('scale', scale);
            console.log('click')
        });
}});
