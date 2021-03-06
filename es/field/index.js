import _mergeJSXProps2 from "@vue/babel-helper-vue-jsx-merge-props";
import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import _extends from "@babel/runtime/helpers/esm/extends";
import { use, isObj, isDef } from '../utils';
import Icon from '../icon';
import Cell from '../cell';
import CellMixin from '../mixins/cell';

var _use = use('field'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  inheritAttrs: false,
  mixins: [CellMixin],
  props: {
    error: Boolean,
    leftIcon: String,
    rightIcon: String,
    readonly: Boolean,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && isDef(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && isDef(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClickLeftIcon: function onClickLeftIcon() {
      this.$emit('click-left-icon');
    },
    onClickRightIcon: function onClickRightIcon() {
      // compatible old version
      this.$emit('click-icon');
      this.$emit('click-right-icon');
      this.onIconClick && this.onIconClick();
    },
    onClear: function onClear(event) {
      event.preventDefault();
      this.$emit('input', '');
      this.$emit('clear');
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          event.preventDefault();
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (isObj(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  },
  render: function render(h) {
    var _bem;

    var type = this.type,
        labelAlign = this.labelAlign,
        slots = this.$slots;
    var showLeftIcon = slots['left-icon'] || this.leftIcon;
    var showRightIcon = slots['right-icon'] || slots.icon || this.rightIcon || this.icon;
    var LeftIcon = showLeftIcon && h("div", {
      "slot": "icon",
      "class": bem('left-icon'),
      "on": {
        "click": this.onClickLeftIcon
      }
    }, [slots['left-icon'] || h(Icon, {
      "attrs": {
        "name": this.leftIcon
      }
    })]);
    var RightIcon = showRightIcon && h("div", {
      "class": bem('right-icon'),
      "on": {
        "click": this.onClickRightIcon
      }
    }, [slots['right-icon'] || slots.icon || h(Icon, {
      "attrs": {
        "name": this.rightIcon || this.icon
      }
    })]);
    var inputProps = {
      ref: 'input',
      class: bem('control', this.inputAlign),
      domProps: {
        value: this.value
      },
      attrs: _extends({}, this.$attrs, {
        readonly: this.readonly
      }),
      on: this.listeners
    };
    var Input = type === 'textarea' ? h("textarea", _mergeJSXProps([{}, inputProps])) : h("input", _mergeJSXProps2([{
      "attrs": {
        "type": type
      }
    }, inputProps]));
    return h(Cell, {
      "attrs": {
        "icon": this.leftIcon,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required
      },
      "class": bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = type === 'textarea' && !this.autosize, _bem))
    }, [LeftIcon, h('template', {
      slot: 'title'
    }, slots.label), h("div", {
      "class": bem('body')
    }, [Input, this.showClear && h(Icon, {
      "attrs": {
        "name": "clear"
      },
      "class": bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), RightIcon, slots.button && h("div", {
      "class": bem('button')
    }, [slots.button])]), this.errorMessage && h("div", {
      "class": bem('error-message')
    }, [this.errorMessage])]);
  }
});