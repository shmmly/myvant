import { use } from '../utils';
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';

var _use = use('tag'),
    sfc = _use[0],
    bem = _use[1];

var COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};
export default sfc({
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    style: function style() {
      var _style;

      var color = this.color || COLOR_MAP[this.type] || GRAY_DARK;
      var key = this.plain ? 'color' : 'backgroundColor';
      var style = (_style = {}, _style[key] = color, _style);

      if (this.textColor) {
        style.color = this.textColor;
      }

      return style;
    }
  },
  render: function render(h) {
    var _bem;

    var mark = this.mark,
        plain = this.plain,
        round = this.round,
        size = this.size;
    return h("span", {
      "class": [bem((_bem = {
        mark: mark,
        plain: plain,
        round: round
      }, _bem[size] = size, _bem)), {
        'van-hairline--surround': plain
      }],
      "style": this.style
    }, [this.$slots.default]);
  }
});