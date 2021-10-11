import { shallowMount } from "@vue/test-utils";
import Plate from "@/components/Plate";

describe("Plate", () => {
  it("shallow mounts without errors", () => {
    const wrapper = shallowMount(Plate);
    expect(wrapper).toBeTruthy();
  });
});
