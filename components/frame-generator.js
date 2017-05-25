import { getData } from '../services/data-fetch';
import { bootstrap } from '../actions/';
import { store } from '../index.js';


AFRAME.registerComponent('frame-generator', {
  update: function () {
    // Solution for Creating Entities.
    let sceneEl = document.querySelector('a-scene');
    let people = store.getState();

    people.forEach(function(person, i) {
        // create frame for each person
        let frameEl = document.createElement('a-entity');
        frameEl.setAttribute('obj-model', { 'obj': '#frame-obj', 'mtl': '#frame-mtl'});
        frameEl.setAttribute('position', {x: -1.5, y: 1, z: -(10 * i) - .5});
        frameEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
        frameEl.setAttribute('scale', {x: .05, y: .05, z: .05});
        frameEl.setAttribute('frame-hover', true);

        // add image as child of frame
        let imgEl = document.createElement('a-image');
        imgEl.setAttribute('src', person.acf.user_image.sizes.large);
        imgEl.setAttribute('position', {x: -.5, y: 0, z: 0});
        imgEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
        imgEl.setAttribute('height', 1.75);

        // add name as child of frame
        let nameEl = document.createElement('a-text');
        nameEl.setAttribute('value', person.name);
        nameEl.setAttribute('position', {x: -0.5, y: 0.15, z: 0.8});
        nameEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
        nameEl.setAttribute('align', 'center');
        nameEl.setAttribute('width', '5');

        // add title as child of frame
        let titleEl = document.createElement('a-text');
        titleEl.setAttribute('value', person.acf.job_title);
        titleEl.setAttribute('position', {x: -0.5, y: 0.15, z: 1});
        titleEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
        titleEl.setAttribute('align', 'center');
        titleEl.setAttribute('width', '3');

        // add color overlay as child of frame
        let colorPlateEl = document.createElement('a-entity');
        colorPlateEl.setAttribute('geometry', 'primitive: plane');
        colorPlateEl.setAttribute('material', {'transparent': true, 'opacity': .25, 'color': person.acf.favorite_color});
        colorPlateEl.setAttribute('position', {x: -0.5, y: 0, z: 0});
        colorPlateEl.setAttribute('rotation', {x: -90, y: 0, z: 0});
        colorPlateEl.setAttribute('scale', {x: 1, y: 1.75, z: 1});
        colorPlateEl.setAttribute('class', 'colorplate');
        colorPlateEl.setAttribute('visible', false);

        let colorPlateTextEl = document.createElement('a-text');
        colorPlateTextEl.setAttribute('value', 'Favorite color: ' + person.acf.favorite_color);
        colorPlateTextEl.setAttribute('position', {x: -0.5, y: 0, z: 0});
        colorPlateTextEl.setAttribute('rotation', {x: 0, y: 0, z: 0});
        colorPlateTextEl.setAttribute('width', '2');

        colorPlateEl.appendChild(colorPlateTextEl);

        frameEl.appendChild(nameEl);
        frameEl.appendChild(titleEl);
        frameEl.appendChild(imgEl);
        frameEl.appendChild(colorPlateEl);

        sceneEl.appendChild(frameEl);
      });
  }
});
