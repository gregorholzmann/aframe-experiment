AFRAME.registerComponent('frame-generator', {
  init: function () {
    // Solution for Creating Entities.
    var sceneEl = document.querySelector('a-scene'); 

    fetch('./assets/data/people.json')  
    .then(  
        function(response) {  
          if (response.status !== 200) {  
              console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
              return;  
          }
          // Examine the text in the response  
          response.json().then(function(data) {  
              let people = data.citizens;

              people.forEach(function(person, i) {
                var frameEl = document.createElement('a-entity');
                frameEl.setAttribute('gltf-model', '#frame');
                frameEl.setAttribute('position', {x: -1.5, y: 2, z: -(10 * i) - .5});
                frameEl.setAttribute('rotation', {x: 90, y: 90, z: 0});
                frameEl.setAttribute('frame-hover', true);

                var imgEl = document.createElement('a-image');
                imgEl.setAttribute('src', person.img);
                imgEl.setAttribute('position', {x: -.5, y: 0, z: 0});
                imgEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
                imgEl.setAttribute('height', 1.75);

                var checkpointEl = document.createElement('a-cylinder');
                checkpointEl.setAttribute('radius', 1);
                checkpointEl.setAttribute('height', 0.1);
                checkpointEl.setAttribute('color', '#39BB82');
                checkpointEl.setAttribute('position', {x: 0, y: 0, z: - (10 * i)});
                checkpointEl.setAttribute('checkpoint', {'offset': '0 1.6 0'});
                checkpointEl.setAttribute('handle-hover', true);

                var nameEl = document.createElement('a-text');
                nameEl.setAttribute('value', person.name);
                nameEl.setAttribute('position', {x: -0.5, y: 0.10, z: 0.8});
                nameEl.setAttribute('rotation', {x: -90, y: 0, z: 0});    
                nameEl.setAttribute('align', 'center');            
                nameEl.setAttribute('width', '5');

                frameEl.appendChild(nameEl);
                frameEl.appendChild(imgEl);      

                sceneEl.appendChild(frameEl);
                sceneEl.appendChild(checkpointEl);
              });
          });  
        }  
    )  
    .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
    });
  }
});
