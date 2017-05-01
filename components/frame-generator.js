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
          // Examine the data in the response
          response.json().then(function(data) {
              let people = data.citizens;

              people.forEach(function(person, i) {
                // create frame for each person
                let frameEl = document.createElement('a-entity');
                frameEl.setAttribute('gltf-model', '#frame');
                frameEl.setAttribute('position', {x: -1.5, y: 2, z: -(10 * i) - .5});
                frameEl.setAttribute('rotation', {x: 90, y: 90, z: 0});
                frameEl.setAttribute('frame-hover', true);
                frameEl.setAttribute('material', {'color': '#000000'});
                console.log(frameEl);

                // add image as child of frame
                let imgEl = document.createElement('a-image');
                imgEl.setAttribute('src', person.img);
                imgEl.setAttribute('position', {x: -.5, y: 0, z: 0});
                imgEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
                imgEl.setAttribute('height', 1.75);

                // add name as child of frame
                let nameEl = document.createElement('a-text');
                nameEl.setAttribute('value', person.name);
                nameEl.setAttribute('position', {x: -0.5, y: 0.10, z: 0.8});
                nameEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
                nameEl.setAttribute('align', 'center');
                nameEl.setAttribute('width', '5');

                // add color overlay as child of frame
                let colorPlateEl = document.createElement('a-entity');
                colorPlateEl.setAttribute('geometry', 'primitive: plane');
                colorPlateEl.setAttribute('material', {'transparent': true, 'opacity': .25, 'color': person.color});
                colorPlateEl.setAttribute('position', {x: -0.5, y: 0, z: 0});
                colorPlateEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
                colorPlateEl.setAttribute('scale', {x: 1, y: 1.75, z: 1});
                colorPlateEl.setAttribute('class', 'colorplate');
                colorPlateEl.setAttribute('visible', false);

                let colorPlateTextEl = document.createElement('a-text');
                colorPlateTextEl.setAttribute('value', 'Favorite color: ' + person.color);
                colorPlateTextEl.setAttribute('position', {x: -0.5, y: 0, z: 0});
                colorPlateTextEl.setAttribute('rotation', {x: 0, y: 0, z: 0});
                colorPlateTextEl.setAttribute('width', '2');

                colorPlateEl.appendChild(colorPlateTextEl);

                frameEl.appendChild(nameEl);
                frameEl.appendChild(imgEl);
                frameEl.appendChild(colorPlateEl);

                sceneEl.appendChild(frameEl);                

                // add checkpoint for each person
                let checkpointEl = document.createElement('a-cylinder');
                checkpointEl.setAttribute('radius', 1);
                checkpointEl.setAttribute('height', 0.1);
                checkpointEl.setAttribute('color', '#39BB82');
                checkpointEl.setAttribute('position', {x: 0, y: 0, z: - (10 * i)});
                checkpointEl.setAttribute('checkpoint', {'offset': '0 1.6 0'});
                checkpointEl.setAttribute('handle-hover', true);

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
