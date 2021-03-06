"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('step'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      }

      if (index === active) {
        return 'process';
      }
    }
  },
  render: function render(h) {
    var _ref;

    var status = this.status;
    var _this$$parent = this.$parent,
        activeColor = _this$$parent.activeColor,
        direction = _this$$parent.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };
    return h("div", {
      "class": ['van-hairline', bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": bem('title'),
      "style": titleStyle
    }, [this.$slots.default]), h("div", {
      "class": bem('circle-container')
    }, [status !== 'process' ? h("i", {
      "class": bem('circle')
    }) : h(_icon.default, {
      "attrs": {
        "name": "checked"
      },
      "style": {
        color: activeColor
      }
    })]), h("div", {
      "class": bem('line')
    })]);
  }
});

exports.default = _default;