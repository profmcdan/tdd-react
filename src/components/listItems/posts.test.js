import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test-utils";
import Posts from "./Posts";

describe("ListItem Component", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Test Title",
        description: "Some texts"
      };
      const propsErr = checkProps(Posts, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test Title",
        description: "Some texts"
      };
      wrapper = shallow(<Posts {...props} />);
    });

    it("Should render without error", () => {
      const component = findByTestAttr(wrapper, "post-component");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "post-title");
      expect(title.length).toBe(1);
    });

    it("Should render a description", () => {
      const desc = findByTestAttr(wrapper, "post-desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Component should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: "Some texts"
      };
      wrapper = shallow(<Posts {...props} />);
    });

    it("Should not render", () => {
      const component = findByTestAttr(wrapper, "post-component");
      expect(component.length).toBe(0);
    });
  });
});
