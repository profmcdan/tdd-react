import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "./test-utils";
import { Provider } from "react-redux";
import App from "./App";
// import { store } from "./createStore";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  ).dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const posts = [
      { title: "Some Title 1", body: "Some text", id: 2 },
      { title: "Some Title 2", body: "Some text", id: 3 }
    ];
    wrapper = setUp({ posts });
  });

  test("should render without errors", () => {
    const component = findByTestAttr(wrapper, "app-component");
    expect(component.length).toBe(0);
  });
});

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });
