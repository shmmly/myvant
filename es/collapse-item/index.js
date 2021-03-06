import _extends from "@babel/runtime/helpers/esm/extends";
import { use, isDef } from '../utils';
import { raf } from '../utils/raf';
import Cell from '../cell';
import CellMixin from '../mixins/cell';
import FindParent from '../mixins/find-parent';

var _use = use('collapse-item'),
    sfc = _use[0],
    bem = _use[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];
export default sfc({
  mixins: [CellMixin, FindParent],
  props: {
    name: [String, Number],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return isDef(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      }

      this.$nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var contentHeight = content.clientHeight + "px";
        wrapper.style.height = _expanded ? 0 : contentHeight;
        raf(function () {
          wrapper.style.height = _expanded ? contentHeight : 0;
        });
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      var expanded = !this.expanded;
      this.parent.switch(name, expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = null;
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var Title = h(Cell, {
      "class": bem('title', {
        disabled: this.disabled,
        expanded: this.expanded
      }),
      "on": {
        "click": this.onClick
      },
      "props": _extends({}, this.$props)
    }, [this.$slots.value, CELL_SLOTS.map(function (slot) {
      return h('template', {
        slot: slot
      }, _this3.$slots[slot]);
    })]);
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": bem('content')
    }, [this.$slots.default])]);
    return h("div", {
      "class": [bem(), {
        'van-hairline--top': this.index
      }]
    }, [Title, Content]);
  }
});