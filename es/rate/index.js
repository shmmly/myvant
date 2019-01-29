/* eslint-disable prefer-spread */
import { use } from '../utils';
import Icon from '../icon';

var _use = use('rate'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  props: {
    value: Number,
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 20
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    }
  },
  computed: {
    list: function list() {
      var _this = this;

      return Array.apply(null, {
        length: this.count
      }).map(function (value, index) {
        return index < _this.value;
      });
    }
  },
  methods: {
    onSelect: function onSelect(index) {
      if (!this.disabled && !this.readonly) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (!document.elementFromPoint) {
        return;
      }

      event.preventDefault();
      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var target = document.elementFromPoint(clientX, clientY);

      if (target && target.dataset) {
        var index = target.dataset.index;
        /* istanbul ignore else */

        if (index) {
          this.onSelect(+index);
        }
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h("div", {
      "class": bem(),
      "on": {
        "touchmove": this.onTouchMove
      }
    }, [this.list.map(function (full, index) {
      return h(Icon, {
        "key": index,
        "class": bem('item'),
        "attrs": {
          "size": _this2.size + "px",
          "data-index": index,
          "name": full ? _this2.icon : _this2.voidIcon,
          "color": _this2.disabled ? _this2.disabledColor : full ? _this2.color : _this2.voidColor
        },
        "on": {
          "click": function click() {
            _this2.onSelect(index);
          }
        }
      });
    })]);
  }
});