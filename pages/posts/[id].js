import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getPost } from "../../lib/operations/postsOperation";
import Layout from "../../components/Layout";
import PostById from "../../components/singlePost/PostById";

const postById = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  
  const getInitialProps = async () => {
    await dispatch(getPost(id));
  };
  getInitialProps();
  return (
    <Layout>
      <PostById />
    </Layout>
  );
};

export default postById;
