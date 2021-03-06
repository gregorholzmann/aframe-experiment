"use strict"

if (module.hot) {
  module.hot.accept()
}

import { AFRAME } from './node_modules/aframe/dist/aframe-master';
import { aframeTemplate } from './node_modules/aframe-template-component/dist/aframe-template-component.min';
import { aframeExtras } from './node_modules/aframe-extras/dist/aframe-extras.min';
import { aframeRedux } from './node_modules/aframe-redux-component/dist/aframe-redux-component.min';
import { aframeLookAt } from './node_modules/aframe-look-at-component/dist/aframe-look-at-component.min';
import { fetch } from './node_modules/isomorphic-fetch';
