import postsReducer from "./reducer";
import { GET_POSTS } from "../../actions/types";

describe("Post Reducer", () => {
  it("Should return default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const posts = [
      { id: 1, title: "test 1" },
      { id: 1, title: "test 1" },
      { id: 1, title: "test 1" }
    ];
    const newState = postsReducer([], {
      type: GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
