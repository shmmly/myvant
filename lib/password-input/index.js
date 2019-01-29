"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('password-input'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },
  computed: {
    points: function points() {
      var arr = [];

      for (var i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }

      return arr;
    }
  },
  render: function render(h) {
    var _this = this;

    var info = this.errorInfo || this.info;
    return h("div", {
      "class": bem()
    }, [h("ul", {
      "class": [bem('security'), 'van-hairline--surround'],
      "on": {
        "touchstart": function touchstart(event) {
          event.stopPropagation();

          _this.$emit('focus');
        }
      }
    }, [this.points.map(function (visibility) {
      return h("li", {
        "class": "van-hairline"
      }, [h("i", {
        "style": {
          visibility: visibility
        }
      })]);
    })]), info && h("div", {
      "class": bem(this.errorInfo ? 'error-info' : 'info')
    }, [info])]);
  }
});

exports.default = _default;