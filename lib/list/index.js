"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _scroll = _interopRequireDefault(require("../utils/scroll"));

var _loading = _interopRequireDefault(require("../loading"));

var _event = require("../utils/event");

var _use = (0, _utils.use)('list'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var _default = sfc({
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    }
  },
  mounted: function mounted() {
    this.scroller = _scroll.default.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished || this.error) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;

      var scrollerHeight = _scroll.default.getVisibleHeight(scroller);
      /* istanbul ignore next */


      if (!scrollerHeight || _scroll.default.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = _scroll.default.getScrollTop(scroller);

      var targetBottom = scrollTop + scrollerHeight;
      var reachBottom = false;
      /* istanbul ignore next */

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = _scroll.default.getElementTop(el) - _scroll.default.getElementTop(scroller) + _scroll.default.getVisibleHeight(el);

        reachBottom = elBottom - scrollerHeight < this.offset;
      }
      /* istanbul ignore else */


      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.$nextTick(this.check);
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? _event.on : _event.off)(this.scroller, 'scroll', this.check);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [this.$slots.default, this.loading && h("div", {
      "class": bem('loading')
    }, [this.$slots.loading || [h(_loading.default, {
      "class": bem('loading-icon')
    }), h("span", {
      "class": bem('loading-text')
    }, [this.loadingText || t('loading')])]]), this.finished && this.finishedText && h("div", {
      "class": bem('finished-text')
    }, [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText
      },
      "class": bem('error-text')
    }, [this.errorText])]);
  }
});

exports.default = _default;