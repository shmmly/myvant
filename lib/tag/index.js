"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _color = require("../utils/color");

var _use = (0, _utils.use)('tag'),
    sfc = _use[0],
    bem = _use[1];

var COLOR_MAP = {
  danger: _color.RED,
  primary: _color.BLUE,
  success: _color.GREEN
};

var _default = sfc({
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    style: function style() {
      var _style;

      var color = this.color || COLOR_MAP[this.type] || _color.GRAY_DARK;
      var key = this.plain ? 'color' : 'backgroundColor';
      var style = (_style = {}, _style[key] = color, _style);

      if (this.textColor) {
        style.color = this.textColor;
      }

      return style;
    }
  },
  render: function render(h) {
    var _bem;

    var mark = this.mark,
        plain = this.plain,
        round = this.round,
        size = this.size;
    return h("span", {
      "class": [bem((_bem = {
        mark: mark,
        plain: plain,
        round: round
      }, _bem[size] = size, _bem)), {
        'van-hairline--surround': plain
      }],
      "style": this.style
    }, [this.$slots.default]);
  }
});

exports.default = _default;