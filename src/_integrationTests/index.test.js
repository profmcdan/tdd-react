import moxios from "moxios";
import { testStore } from "../test-utils";

import { fetchPosts } from "../actions/posts";

describe("fetchPosts actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should update correctly", () => {
    const expectedState = [
      {
        title: "Some Title 1",
        body: "Some text",
        id: 1
      },
      { title: "Some Title 2", body: "Some text", id: 2 },
      { title: "Some Title 3", body: "Some text", id: 3 },
      { title: "Some Title 4", body: "Some text", id: 4 }
    ];

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
