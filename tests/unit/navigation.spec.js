import { shallowMount } from "@vue/test-utils";
import Desktop from "@/components/navigation/Desktop.vue";

describe("Desktop.vue", () => {
  it("Has a nav", () => {
    const wrapper = shallowMount(Desktop);
    expect(wrapper.contains("nav")).toBe(true);
  });
});
