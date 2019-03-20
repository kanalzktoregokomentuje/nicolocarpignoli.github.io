AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            console.log(ev.detail)
            console.log(document.querySelector('#animated-marker'))
            console.log(document.querySelector('#animated-model'))
        });
}});
