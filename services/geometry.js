export function plotHalfCircle(index) {
    let radius = -3.5;
    let step = Math.PI/5;
    let cX = radius * Math.cos(step * index);
    let cZ = radius * Math.sin(step * index);
    return {
        x: cX,
        y: 1,
        z: cZ
    };
}
