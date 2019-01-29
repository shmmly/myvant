import { use } from '../utils';
import Popup from '../mixins/popup';

var _use = use('popup'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  mixins: [Popup],
  props: {
    position: String,
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    var _bem;

    if (!this.shouldRender) {
      return;
    }

    var position = this.position;
    var transitionName = this.transition || (position ? "van-popup-slide-" + position : 'van-fade');
    return h("transition", {
      "attrs": {
        "name": transitionName
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": bem((_bem = {}, _bem[position] = position, _bem))
    }, [this.$slots.default])]);
  }
});