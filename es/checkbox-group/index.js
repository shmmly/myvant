import { use } from '../utils';

var _use = use('checkbox-group'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  props: {
    max: Number,
    value: Array,
    disabled: Boolean
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [this.$slots.default]);
  }
});