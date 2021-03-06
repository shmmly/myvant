import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import _extends from "@babel/runtime/helpers/esm/extends";
import { use } from '../utils';
import Field from '../field';

var _use = use('search'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

export default sfc({
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
      return _extends({}, this.$listeners, {
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
    }, [h(Field, _mergeJSXProps([{
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