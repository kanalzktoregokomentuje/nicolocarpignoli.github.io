AFRAME.registerComponent('emitter', {

    init: function() {
        console.log('this.el', this.el)
        // every click, we make our model grow in size :)
        this.addEventListener('click', function(ev){
            const cursorEl = ev && ev.detail && ev.detail.cursorEl;
            console.log(cursorEl)
            if (cursorEl === this) {
                // const scale = aEntity.getAttribute('scale');
                // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                // aEntity.setAttribute('scale', scale);
                console.log('CLICCCKOOONEEE')
            }
        });
}});
