AFRAME.registerComponent('checkpoint-generator', {
  init: function () {
    // Solution for Creating Entities.
    var sceneEl = document.querySelector('a-scene'); 
    
    for (var i = 0; i < 5; i++) {
      var checkpointEl = document.createElement('a-cylinder');
      checkpointEl.setAttribute('radius', 1);
      checkpointEl.setAttribute('height', 0.1);
      checkpointEl.setAttribute('color', '#39BB82');
      checkpointEl.setAttribute('position', {x: 0, y: 0, z: -(10 * i)});
      checkpointEl.setAttribute('checkpoint', {'offset': '0 1.6 0'});       
      checkpointEl.setAttribute('handle-hover', true);     
      sceneEl.appendChild(checkpointEl);
    }
  }
});