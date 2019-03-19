AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev){
            console.log('event', ev.detail)

            const cursor = ev && ev.detail && ev.detail.cursorEl;
            if (cursor) {
                // const scale = aEntity.getAttribute('scale');
                // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                // aEntity.setAttribute('scale', scale);
                console.log('CLICCCKOOONEEE')
            }
        });
}});
