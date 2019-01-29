"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _findParent = _interopRequireDefault(require("../mixins/find-parent"));

var _use = (0, _utils.use)('radio'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [_findParent.default],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
  },
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },
  created: function created() {
    this.findParent('van-radio-group');
  },
  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var checked = this.currentValue === this.name;
    var isDisabled = this.isDisabled,
        checkedColor = this.checkedColor;
    var iconStyle = checkedColor && checked && !isDisabled && {
      color: checkedColor
    };
    return h("div", {
      "class": bem({
        disabled: isDisabled
      }),
      "on": {
        "click": function click() {
          _this.$emit('click');
        }
      }
    }, [h("span", {
      "class": bem('input')
    }, [h("input", (0, _babelHelperVueJsxMergeProps.default)([{
      "on": {
        "change": function change($event) {
          _this.currentValue = _this.name;
        }
      },
      "attrs": {
        "type": "radio",
        "disabled": isDisabled
      },
      "class": bem('control'),
      "domProps": {
        "checked": this._q(_this.currentValue, _this.name)
      }
    }, {
      directives: [{
        name: "model",
        value: _this.currentValue,
        modifiers: {}
      }]
    }])), h(_icon.default, {
      "style": iconStyle,
      "attrs": {
        "name": checked ? 'checked' : 'circle'
      }
    })]), this.$slots.default && h("span", {
      "class": bem('label', this.labelPosition),
      "on": {
        "click": this.onClickLabel
      }
    }, [this.$slots.default])]);
  }
});

exports.default = _default;