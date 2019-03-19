AFRAME.registerComponent('emitter', {

    init: function() {
        // every click, we make our model grow in size :)
        this.el.addEventListener('click', function(ev){
            const cursorEl = ev && ev.detail && ev.detail.cursorEl;
            console.log(cursorEl, this.el)
            if (cursorEl === this.el) {
                // const scale = aEntity.getAttribute('scale');
                // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                // aEntity.setAttribute('scale', scale);
                console.log('CLICCCKOOONEEE')
            }
        });
}});
