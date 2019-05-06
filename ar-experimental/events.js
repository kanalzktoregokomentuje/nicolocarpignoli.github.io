AFRAME.registerComponent('markerhandler', {
    init: () => {
        document.querySelector('body').addEventListener('gestureend', (event) => {
            let scale = 0;
            if (event.scale < 1.0) {
                // User moved fingers closer together
                scale++;
            } else if (event.scale > 1.0) {
                // User moved fingers further apart
                scale--;
            }
            return setZoom(scale);
        }, false);
}});

const setCurrentZoom = (scale) => {
    const element = document.getElementById('camera');
    const camera = element.getAttribute('camera');
    camera.zoom = camera.zoom + scale;
    return element.setAttribute('camera', camera);
};