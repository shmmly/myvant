"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _touch = _interopRequireDefault(require("../mixins/touch"));

var _clickOutside = _interopRequireDefault(require("../mixins/click-outside"));

var _use = (0, _utils.use)('swipe-cell'),
    sfc = _use[0],
    bem = _use[1];

var THRESHOLD = 0.15;

var _default = sfc({
  mixins: [_touch.default, (0, _clickOutside.default)({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number
  },
  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },
  methods: {
    open: function open(position) {
      var offset = position === 'left' ? this.leftWidth : -this.rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = (0, _utils.range)(offset, -this.rightWidth, this.leftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(this.deltaX);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.draging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
    };
    return h("div", {
      "class": bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag
      }
    }, [h("div", {
      "class": bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swipe = false;
        }
      }
    }, [this.leftWidth && h("div", {
      "class": bem('left'),
      "on": {
        "click": onClick('left', true)
      }
    }, [this.$slots.left]), this.$slots.default, this.rightWidth && h("div", {
      "class": bem('right'),
      "on": {
        "click": onClick('right', true)
      }
    }, [this.$slots.right])])]);
  }
});

exports.default = _default;