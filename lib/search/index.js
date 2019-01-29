"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _field = _interopRequireDefault(require("../field"));

var _use = (0, _utils.use)('search'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var _default = sfc({
  inheritAttrs: false,
  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },
  computed: {
    listeners: function listeners() {
      return (0, _extends2.default)({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },
  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onKeypress: function onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }

      this.$emit('keypress', event);
    },
    onBack: function onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  },
  render: function render(h) {
    var showAction = this.showAction;
    var props = {
      attrs: this.$attrs,
      on: this.listeners
    };
    return h("div", {
      "class": bem({
        'show-action': showAction
      }),
      "style": {
        background: this.background
      }
    }, [h(_field.default, (0, _babelHelperVueJsxMergeProps.default)([{
      "attrs": {
        "clearable": true,
        "type": "search",
        "value": this.value,
        "border": false,
        "leftIcon": "search"
      }
    }, props]), [h('template', {
      slot: 'left-icon'
    }, this.$slots['left-icon'])]), showAction && h("div", {
      "class": bem('action')
    }, [this.$slots.action || h("div", {
      "on": {
        "click": this.onBack
      }
    }, [t('cancel')])])]);
  }
});

exports.default = _default;