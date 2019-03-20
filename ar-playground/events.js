AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            console.log(ev.detail)
            if (ev.detail.intersectedEl) {
                console.log('click a frame', ev.detail.intersectedEl)
            }
        });
}});
