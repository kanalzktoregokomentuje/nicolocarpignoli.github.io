AFRAME.registerComponent('click-listener', {
    init: function() {
        const aEntity = document.querySelector('#animated-model');
        this.el.addEventListener('click', function(ev){
            const clickedObject = ev.detail.intersection.object;
            console.log(clickedObject)
            if (clickedObject && aEntity === clickedObject.parent.el) {
                console.log('ho cliccato la figura')
            }
        });
}});
