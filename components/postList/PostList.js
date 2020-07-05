import styled from "styled-components";
import { useSelector } from "react-redux";
import PostListItem from "../postListItem/PostListItem.js";
import Loader from "../loader/Loader";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PostList = () => {
  const posts = useSelector(state => state.posts);
  const hasElement = (post, idx) => {
    return <PostListItem key={idx} post={post} />;
  };
  return (
    <List>
      {posts.length ? (
        posts.map((post, idx) => hasElement(post, idx))
      ) : (
        <Loader />
      )}
    </List>
  );
};

export default PostList;
