import styled from "styled-components";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import PostListItem from "../postListItem/PostListItem.js";
import Loader from "../loader/Loader";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface SomeState {
  posts: [{ id: number | string; body: string; title: string }];
}
const PostList = () => {
  const posts = useSelector((state: SomeState) => state.posts);
  const hasElement = (post: object, idx: number) => {
    return <PostListItem key={idx} post={post} />;
  };
  return (
    <List>
      {posts.length ? (
        posts.map((post: object, idx: number) => hasElement(post, idx))
      ) : (
        <Loader />
      )}
    </List>
  );
};

export default PostList;
