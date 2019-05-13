import Axios from "axios";
import { GET_POSTS } from "./types";

const postApiEndpoint = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => async dispatch => {
  try {
    const { data } = await Axios.get(postApiEndpoint);
    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
