import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Loading from "../../loading/blog";
import { apiUrl } from "../../config/config";
const graphCms = new GraphQLClient(apiUrl);
const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

async function getContent(slug) {
  const { post } = await graphCms.request(QUERY, { slug });
  return post;
}

const BlogPage = () => {
  let { blogId } = useParams();
  const [blogContent, setBlogContent] = useState({});
  const [loading, setLoading] = useState(
    Object.keys(blogContent).length === 0 ? true : false
  );
  useEffect(() => {
    getContent(blogId).then((post) => {
      console.log(post);
      setBlogContent(post);
      setLoading(false);
    });
  }, [blogId]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.blog}>
      <div className={styles.title}>
        <h2>{blogContent.title}</h2>
      </div>
      <img src={blogContent.coverPhoto.url} alt="" className={styles.cover} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: blogContent.content.html }}
      />
    </div>
  );
};
export default BlogPage;
