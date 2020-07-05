import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getPost } from "../../lib/operations/postsOperation";
import Layout from "../../components/Layout";
import PostById from "../../components/singlePost/SinglePost";

const postById = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const getInitialProps = async () => {
    await dispatch(getPost(id));
  };
  return (
    <Layout>
      <PostById
        post={{
          title: "6666666 happy juice",
          body:
            "6666666 happy juice 6666666 happy juice6666666 happy juice6666666 happy juice",
        }}
      />
    </Layout>
  );
};

export default postById;
