import { use } from '../utils';
import Icon from '../icon';
import Loading from '../loading';
import PopupMixin from '../mixins/popup';

var _use = use('actionsheet'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  mixins: [PopupMixin],
  props: {
    title: String,
    value: Boolean,
    actions: Array,
    cancelText: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSelect: function onSelect(event, item) {
      event.stopPropagation();

      if (!item.disabled && !item.loading) {
        if (item.callback) {
          item.callback(item);
        }

        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  },
  render: function render(h) {
    var _this = this;

    if (!this.shouldRender) {
      return;
    }

    var title = this.title,
        cancelText = this.cancelText,
        onCancel = this.onCancel;

    var Header = function Header() {
      return h("div", {
        "class": [bem('header'), 'van-hairline--top-bottom']
      }, [title, h(Icon, {
        "attrs": {
          "name": "close"
        },
        "on": {
          "click": onCancel
        }
      })]);
    };

    var Option = function Option(item) {
      return h("div", {
        "class": [bem('item', {
          disabled: item.disabled || item.loading
        }), item.className, 'van-hairline--top'],
        "on": {
          "click": function click(event) {
            _this.onSelect(event, item);
          }
        }
      }, [item.loading ? h(Loading, {
        "class": bem('loading'),
        "attrs": {
          "size": "20px"
        }
      }) : [h("span", {
        "class": bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": bem('subname')
      }, [item.subname])]]);
    };

    var Footer = cancelText ? h("div", {
      "class": bem('cancel'),
      "on": {
        "click": onCancel
      }
    }, [cancelText]) : h("div", {
      "class": bem('content')
    }, [this.$slots.default]);
    return h("transition", {
      "attrs": {
        "name": "van-slide-up"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": bem({
        withtitle: title
      })
    }, [title ? Header() : this.actions.map(Option), Footer])]);
  }
});