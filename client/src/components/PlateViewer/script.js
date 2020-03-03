import Plate from "@/components/Plate"
import API from "@/utils/API"

export default {
  name: "PlateViewer",
  components: { Plate },
  data() {
    return {
      latestPlate: ""
    }
  },
  methods: {
    async fetchLatest() {
      try {
        const { data } = await API.get("latest")
        this.latestPlate = data.latestPlate
      } catch (error) {
        this.$log.error(error)
      }
    }
  },
  async beforeMount() {
    try {
      this.fetchLatest()
      this.sockets.subscribe("generate", generated => {
        this.latestPlate = generated
      })
    } catch (error) {
      this.$log.error(error)
    }
  },
  destroyed() {
    this.sockets.unsubscribe("generate")
  },
  sockets: {
    async connect() {
      this.$log.debug("connected to socket")
      this.fetchLatest()
    },
    disconnect() {
      this.$log.debug("disconnected from socket")
    }
  }
}
