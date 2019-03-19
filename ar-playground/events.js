AFRAME.registerComponent('emitter', {

    init: function() {
        console.log('this.el', this.el)
        // every click, we make our model grow in size :)
        this.el.addEventListener('click', function(ev){
            console.log('event', ev.detail)

            const cursorEl = ev && ev.detail && ev.detail.cursorEl;
            if (cursorEl === this.el) {
                // const scale = aEntity.getAttribute('scale');
                // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                // aEntity.setAttribute('scale', scale);
                console.log('CLICCCKOOONEEE')
            }
        });
}});
