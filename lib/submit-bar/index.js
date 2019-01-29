"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _button = _interopRequireDefault(require("../button"));

var _use = (0, _utils.use)('submit-bar'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var _default = sfc({
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
    }, [this.currency + " " + (price / 100).toFixed(2)])]]), h(_button.default, {
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

exports.default = _default;