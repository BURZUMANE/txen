import styled from "styled-components";
import SinglePost from "../singlePost/SinglePost.tsx";

const Li = styled.li`
  min-width: 30%;
`;
const PostListItem = ({ post }) => {
  return (
    <Li>
      <SinglePost post={post} />
    </Li>
  );
};

export default PostListItem;
