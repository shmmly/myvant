"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('tree-select'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    items: Array,
    mainActiveIndex: Number,
    activeId: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: Number,
      default: 300
    }
  },
  computed: {
    subItems: function subItems() {
      var selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    }
  },
  methods: {
    onClickNav: function onClickNav(data, index) {
      if (!data.disabled) {
        this.$emit('navclick', index);
      }
    },
    onItemSelect: function onItemSelect(data) {
      if (!data.disabled) {
        this.$emit('itemclick', data);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var height = this.height,
        items = this.items,
        mainActiveIndex = this.mainActiveIndex,
        activeId = this.activeId,
        subItems = this.subItems;
    return h("div", {
      "class": bem(),
      "style": {
        height: height + 'px'
      }
    }, [h("div", {
      "class": bem('nav')
    }, [items.map(function (item, index) {
      return h("div", {
        "key": index,
        "class": ['van-ellipsis', bem('nitem', {
          active: mainActiveIndex === index,
          disabled: item.disabled
        })],
        "on": {
          "click": function click() {
            _this.onClickNav(item, index);
          }
        }
      }, [item.text]);
    })]), h("div", {
      "class": bem('content')
    }, [subItems.map(function (item) {
      return h("div", {
        "key": item.id,
        "class": ['van-ellipsis', bem('item', {
          active: activeId === item.id,
          disabled: item.disabled
        })],
        "on": {
          "click": function click() {
            _this.onItemSelect(item);
          }
        }
      }, [item.text, activeId === item.id && h(_icon.default, {
        "attrs": {
          "name": "checked",
          "size": "16px"
        },
        "class": bem('selected')
      })]);
    })])]);
  }
});

exports.default = _default;