      AFRAME.registerComponent('frame-generator', {
        init: function () {
          // Solution for Creating Entities.
          var sceneEl = document.querySelector('a-scene'); 
          
          for (var i = 0; i < 5; i++) {
            var frameEl = document.createElement('a-entity');
            frameEl.setAttribute('gltf-model', '#frame');
            frameEl.setAttribute('position', {x: -1.5, y: 2, z: -(10 * i) - .5});
            frameEl.setAttribute('rotation', {x: 90, y: 90, z: 0});

            var imgEl = document.createElement('a-image');            
            imgEl.setAttribute('src', '#me');
            imgEl.setAttribute('position', {x: -.5, y: 0, z: 0});
            imgEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
            imgEl.setAttribute('height', 1.75);
            
            
            frameEl.appendChild(imgEl);            
            sceneEl.appendChild(frameEl);
          }
        }
      });
