"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _popup = _interopRequireDefault(require("../mixins/popup"));

var _touch = _interopRequireDefault(require("../mixins/touch"));

var _swipe = _interopRequireDefault(require("../swipe"));

var _swipeItem = _interopRequireDefault(require("../swipe-item"));

var _use = (0, _utils.use)('image-preview'),
    sfc = _use[0],
    bem = _use[1];

var MAX_ZOOM = 3;
var MIN_ZOOM = 1 / 3;

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}

var _default = sfc({
  mixins: [_popup.default, _touch.default],
  props: {
    images: Array,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    startPosition: Number,
    showIndicators: Boolean,
    className: [String, Object, Array],
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: 'van-image-preview__overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.active = this.startPosition;
    },
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      event.preventDefault();
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        var index = this.active;
        this.resetScale();
        this.$emit('close', {
          index: index,
          url: this.images[index]
        });

        if (!this.asyncClose) {
          this.$emit('input', false);
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _utils.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _utils.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = (0, _utils.range)(scale, MIN_ZOOM, MAX_ZOOM);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    onChange: function onChange(active) {
      this.resetScale();
      this.active = active;
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    }
  },
  render: function render(h) {
    var _this = this;

    if (!this.value) {
      return;
    }

    var active = this.active,
        images = this.images;
    var Index = this.showIndex && h("div", {
      "class": bem('index')
    }, [active + 1 + "/" + images.length]);
    var Images = h(_swipe.default, {
      "ref": "swipe",
      "attrs": {
        "loop": this.loop,
        "indicator-color": "white",
        "initial-swipe": this.startPosition,
        "show-indicators": this.showIndicators
      },
      "on": {
        "change": this.onChange
      }
    }, [images.map(function (image, index) {
      var props = {
        class: bem('image'),
        style: index === active ? _this.imageStyle : null,
        on: {
          touchstart: _this.onTouchStart,
          touchmove: _this.onTouchMove,
          touchend: _this.onTouchEnd,
          touchcancel: _this.onTouchEnd
        }
      };
      return h(_swipeItem.default, [_this.lazyLoad ? h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "directives": [{
          name: "lazy",
          value: image
        }]
      }, props])) : h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "src": image
        }
      }, props]))]);
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [Index, Images])]);
  }
});

exports.default = _default;