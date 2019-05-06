AFRAME.registerComponent('markerhandler', {
    init: () => {
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

const setCurrentZoom = (element, scale) => {
    const current = element.getAttribute('camera').zoom;
    return element.setAttribute('camera', {zoom: current + scale});
};