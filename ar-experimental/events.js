AFRAME.registerComponent('markerhandler', {
    init: function() {
        const camera = document.querySelector('#camera');
        console.log('Got camera', camera);
        document.querySelector('body').addEventListener('gestureend', (event) => {
            let scale = 0;
            if (event.scale < 1.0) {
                // User moved fingers closer together
                scale++;
            } else if (event.scale > 1.0) {
                // User moved fingers further apart
                scale--;
            }
            return setZoom(camera, scale);
        }, false);
}});

const getCurrentZoom = (element) => {
    let zoom = element.getAttribute('camera');
    zoom = zoom.split('zoom: ') && zoom.split('zoom: ')[1];
    return zoom;
};

const setCurrentZoom = (element, scale) => {
    const current = getCurrentZoom(element);
    return element.setAttribute('camera', `camera: ${current + scale};`);
};