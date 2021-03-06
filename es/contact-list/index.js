import { use } from '../utils';
import Icon from '../icon';
import Cell from '../cell';
import Button from '../button';
import Radio from '../radio';
import RadioGroup from '../radio-group';

var _use = use('contact-list'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

export default sfc({
  props: {
    value: null,
    list: Array,
    addText: String
  },
  render: function render(h) {
    var _this = this;

    return h("div", {
      "class": bem()
    }, [h(RadioGroup, {
      "attrs": {
        "value": this.value
      },
      "class": bem('group'),
      "on": {
        "input": function input(event) {
          _this.$emit('input', event);
        }
      }
    }, [this.list.map(function (item, index) {
      return h(Cell, {
        "key": item.id,
        "attrs": {
          "isLink": true
        }
      }, [h(Radio, {
        "attrs": {
          "name": item.id
        },
        "on": {
          "click": function click() {
            _this.$emit('select', item, index);
          }
        }
      }, [h("div", {
        "class": bem('name')
      }, [item.name + "\uFF0C" + item.tel])]), h(Icon, {
        "slot": "right-icon",
        "attrs": {
          "name": "edit"
        },
        "class": bem('edit'),
        "on": {
          "click": function click() {
            _this.$emit('edit', item, index);
          }
        }
      })]);
    })]), h(Button, {
      "attrs": {
        "square": true,
        "size": "large",
        "type": "danger",
        "text": this.addText || t('addText')
      },
      "class": bem('add'),
      "on": {
        "click": function click() {
          _this.$emit('add');
        }
      }
    })]);
  }
});