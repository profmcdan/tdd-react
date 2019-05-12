import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../test-utils/index";
import SharedButton from "./Button";
describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        text: "Example text",
        emitEvent: () => {}
      };
      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        text: "Example text",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render a button", () => {
      const button = findByTestAttr(wrapper, "button-component");
      expect(button.length).toBe(1);
    });
  });
});
