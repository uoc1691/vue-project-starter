import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import component from "./../../../src/app/components/sample.vue";

describe("Test setup", () => {
    it("Should pass", () => {
        expect(true).to.be.true;
    });
});

describe("Vue test", () => {
    it("Should pass", () => {
        const wrapper = shallowMount(component);
        expect(wrapper.isVueInstance()).to.be.true;
    });
})