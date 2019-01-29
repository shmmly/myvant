import { use } from '../utils';
import Cell from '../cell';
import CellGroup from '../cell-group';

var _use = use('panel'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  props: {
    icon: String,
    desc: String,
    title: String,
    status: String
  },
  render: function render(h) {
    var slots = this.$slots;
    return h(CellGroup, {
      "class": bem()
    }, [slots.header || h(Cell, {
      "class": bem('header'),
      "attrs": {
        "icon": this.icon,
        "label": this.desc,
        "title": this.title,
        "value": this.status
      }
    }), h("div", {
      "class": bem('content')
    }, [slots.default]), slots.footer && h("div", {
      "class": [bem('footer'), 'van-hairline--top']
    }, [slots.footer])]);
  }
});