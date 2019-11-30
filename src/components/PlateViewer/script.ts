import { Component, Prop, Vue } from "vue-property-decorator"
import RandExp from "randexp"

import Plate from "@/components/Plate/index.vue"

interface RandExpObject extends Object {
  gen: Function
}

@Component({
  components: { Plate }
})
export default class PlateViewer extends Vue {
  private cycleInterval!: number
  private randexp!: RandExpObject
  private plateValue: String = ""

  created() {
    this.cycleInterval = window.setInterval(this.cycle, 2000)
    this.randexp = new RandExp(/[A-Z]{3}\d{1}[A-Z]{1}\d{2}/g)
    this.cycle()
  }

  destroyed() {
    window.clearInterval(this.cycleInterval)
  }

  cycle() {
    this.plateValue = this.randexp.gen()
  }
}
