import { useDispatch } from "react-redux";
import { getPosts } from "../lib/operations/postsOperation";
import Layout from "../components/Layout";

import PostList from "../components/postList/PostList.js";

const IndexPage = () => {
  const dispatch = useDispatch();
  const getInitialProps = async () => {
    await dispatch(getPosts());
  };
  getInitialProps();
  return (
    <Layout>
      <PostList></PostList>
    </Layout>
  );
};

export default IndexPage;
