AFRAME.registerComponent('click-listener', {
    init: function() {
        this.el.addEventListener('click', function(ev){
            console.log(ev)
            console.log(document.querySelector('#animated-marker'))
            console.log(document.querySelector('#animated-model'))
        });
}});
