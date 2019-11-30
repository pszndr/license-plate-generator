import { shallowMount } from "@vue/test-utils"
import { expect } from "chai"

import Plate from "./index.vue"

describe("Plate", () => {
  it("mounts", () => {
    const wrapper = shallowMount(Plate)
    expect(wrapper && wrapper.isVueInstance()).to.be.true
  })
})
