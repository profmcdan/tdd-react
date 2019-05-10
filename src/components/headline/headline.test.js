import React, { Component } from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";
import { findByTestAttr } from "../../test-utils/index";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};
describe("Headline Component", () => {
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description"
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "headline-component");
      expect(component.length).toBe(1);
    });

    it("Should render a H1", () => {
      const component = findByTestAttr(wrapper, "header");
      expect(component.length).toBe(1);
    });

    it("Should render a desc", () => {
      const component = findByTestAttr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttr(wrapper, "headline-component");
      expect(component.length).toBe(0);
    });
  });
});
