import { use, isDef } from '../utils';
import Icon from '../icon';
import CellMixin from '../mixins/cell';
import RouterLink from '../mixins/router-link';

var _use = use('cell'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  mixins: [CellMixin, RouterLink],
  props: {
    size: String,
    clickable: Boolean,
    arrowDirection: String
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
      this.routerLink();
    }
  },
  render: function render(h) {
    var _bem;

    var slots = this.$slots;
    var showTitle = slots.title || isDef(this.title);
    var showValue = slots.default || isDef(this.value);
    var Title = showTitle && h("div", {
      "class": [bem('title'), this.titleClass]
    }, [slots.title || h("span", [this.title]), this.label && h("div", {
      "class": [bem('label'), this.labelClass]
    }, [this.label])]);
    var Value = showValue && h("div", {
      "class": [bem('value', {
        alone: !slots.title && !this.title
      }), this.valueClass]
    }, [slots.default || h("span", [this.value])]);
    var LeftIcon = slots.icon || this.icon && h(Icon, {
      "class": bem('left-icon'),
      "attrs": {
        "name": this.icon
      }
    });
    var arrowIcon = this.arrowDirection ? "arrow-" + this.arrowDirection : 'arrow';
    var RightIcon = slots['right-icon'] || this.isLink && h(Icon, {
      "class": bem('right-icon'),
      "attrs": {
        "name": arrowIcon
      }
    });
    return h("div", {
      "class": bem((_bem = {
        center: this.center,
        required: this.required,
        borderless: !this.border,
        clickable: this.isLink || this.clickable
      }, _bem[this.size] = this.size, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [LeftIcon, Title, Value, RightIcon, slots.extra]);
  }
});