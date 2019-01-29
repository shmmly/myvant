import { use } from '../utils';
import Button from '../button';

var _use = use('submit-bar'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

export default sfc({
  props: {
    tip: String,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    price: {
      type: Number,
      default: null
    },
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },
  render: function render(h) {
    var _this = this;

    var tip = this.tip,
        price = this.price,
        $slots = this.$slots;
    var hasPrice = typeof price === 'number';
    return h("div", {
      "class": bem()
    }, [$slots.top, ($slots.tip || tip) && h("div", {
      "class": bem('tip')
    }, [tip, $slots.tip]), h("div", {
      "class": bem('bar')
    }, [$slots.default, h("div", {
      "class": bem('text')
    }, [hasPrice && [h("span", [this.label || t('label')]), h("span", {
      "class": bem('price')
    }, [this.currency + " " + (price / 100).toFixed(2)])]]), h(Button, {
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.buttonType,
        "loading": this.loading,
        "disabled": this.disabled,
        "text": this.loading ? '' : this.buttonText
      },
      "on": {
        "click": function click() {
          _this.$emit('submit');
        }
      }
    })])]);
  }
});