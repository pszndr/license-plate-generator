import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Plate extends Vue {
  @Prop() private plate!: String
}
