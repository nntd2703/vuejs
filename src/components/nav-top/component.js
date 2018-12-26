import informationItem from '../information-item/template.vue'
export default {
  name: 'navTop',
  components: {
    'information-item': informationItem
  },
  props: {
    msg: String
  }
}
