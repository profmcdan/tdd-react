import React from "react";
import { connect } from "react-redux";
import "./app.scss";
import Header from "./components/layout/header/Header";
import Headline from "./components/headline/Headline";
import { fetchPosts } from "./actions/posts";
import SharedButton from "./button/Button";
import Posts from "./components/listItems/Posts";

const tempArr = [
  { fName: "john", lName: "doe", age: 23, onlineStatus: true, id: 1 },
  { fName: "kay", lName: "brunet", age: 23, onlineStatus: false, id: 2 },
  { fName: "mel", lName: "phil", age: 23, onlineStatus: true, id: 1 }
];

class App extends React.Component {
  state = {};

  getPosts = () => {
    this.props.fetchPosts();
  };
  render() {
    const { posts } = this.props;
    const configButton = {
      text: "Get Posts",
      emitEvent: this.getPosts
    };
    return (
      <div className="App" data-test="app-component">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />

          {posts.length > 0 && (
            <div>
              {posts.map(post => (
                <Posts
                  key={post.id}
                  title={post.title}
                  description={post.body}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
