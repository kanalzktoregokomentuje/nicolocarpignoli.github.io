AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            if (ev.detail.intersectedEl) {
                console.log('click a frame', ev.detail.intersectedEl)
            }
        });
}});
