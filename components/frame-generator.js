import { getData } from '../services/data-fetch';
import { plotHalfCircle } from '../services/geometry';

import { bootstrap } from '../actions/';
import { store } from '../index.js';


AFRAME.registerComponent('frame-generator', {
     init: function () {
        // Solution for Creating Entities.
        let sceneEl = document.querySelector('a-scene');
        let people = store.getState();

        people.forEach(function(person, i) {
            // create frame for each person
            let frameEl = document.createElement('a-entity');
            frameEl.setAttribute('obj-model', { 'obj': '#frame-obj', 'mtl': '#frame-mtl'});
            frameEl.setAttribute('position', plotHalfCircle(i));
            frameEl.setAttribute('scale', {x: .05, y: .05, z: .05});
            frameEl.setAttribute('frame-hover', true);
            frameEl.setAttribute('class', 'frame');
            frameEl.setAttribute('look-at', '0 1 0');

            // add image as child of frame
            let imgEl = document.createElement('a-image');
            imgEl.setAttribute('src', person.acf.user_image.sizes.large);
            imgEl.setAttribute('position', {x: -0.5, y: 20, z: -0.7});
            imgEl.setAttribute('height', 30);
            imgEl.setAttribute('width', 20);

            // add name as child of frame
            let nameEl = document.createElement('a-text');
            nameEl.setAttribute('value', person.name);
            nameEl.setAttribute('position', {x: -0.5, y: 3.5, z: 4});
            nameEl.setAttribute('scale', {x: 15, y: 15, z: 0});
            nameEl.setAttribute('align', 'center');
            nameEl.setAttribute('width', '5');

            // add title as child of frame
            let titleEl = document.createElement('a-text');
            titleEl.setAttribute('value', person.acf.job_title);
            titleEl.setAttribute('position', {x: -0.5, y: 0.5, z: 4});
            titleEl.setAttribute('scale', {x: 15, y: 15, z: 0});
            titleEl.setAttribute('align', 'center');
            titleEl.setAttribute('width', '3');

            // add color overlay as child of frame
            let colorPlateEl = document.createElement('a-entity');
            colorPlateEl.setAttribute('geometry', 'primitive: plane');
            colorPlateEl.setAttribute('material', {'transparent': true, 'opacity': .25, 'color': person.acf.favorite_color});
            colorPlateEl.setAttribute('position', {x: -0.5, y: 20, z: 0});
            colorPlateEl.setAttribute('scale', {x: 20, y: 30, z: 1});
            colorPlateEl.setAttribute('class', 'colorplate');
            colorPlateEl.setAttribute('visible', false);

            let colorPlateTextEl = document.createElement('a-text');
            colorPlateTextEl.setAttribute('value', 'Favorite color: ' + person.acf.favorite_color);
            colorPlateTextEl.setAttribute('position', {x: -0.45, y: -0.4, z: 0});
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
