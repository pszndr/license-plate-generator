import { Component, Vue } from "vue-property-decorator"

import PlateViewer from "@/components/PlateViewer/index.vue"

@Component({
  components: { PlateViewer }
})
export default class Home extends Vue {}
