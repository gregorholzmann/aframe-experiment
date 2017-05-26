import * as actions from '../actions';
import { store } from '../index'

AFRAME.registerComponent('next-page', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            store.dispatch(actions.nextPage());
            el.emit('someEvent', {}, true);
        });
    }
});
