import { shallowMount } from "@vue/test-utils"
import { expect } from "chai"

import PlateViewer from "./index.vue"

describe("PlateViewer", () => {
  it("mounts", () => {
    const wrapper = shallowMount(PlateViewer)
    expect(wrapper && wrapper.isVueInstance()).to.be.true
  })
})
