import { React, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { GraphQLClient, gql } from "graphql-request";
import BlogList from "./fetchBlogs";
import Header from "./header";
import Loading from "../../loading";
import { apiUrl } from "../../config/config";
import "./homepage.css";
require("dotenv").config();

const graphCms = new GraphQLClient(apiUrl);
const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      coverPhoto {
        url
      }
      content {
        html
      }
    }
  }
`;
async function getPosts() {
  const { posts } = await graphCms.request(QUERY);
  console.log(posts);
  return { posts };
}
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(posts);
  const [loading, setLoading] = useState(false);
  console.log(apiUrl)

  useEffect(() => {
    getPosts().then((posts) => {
      setLoading(true);
      setData(posts.posts);
      setPosts(posts.posts);
      setLoading(false);
    });
  }, []);

  const searchData = (query) => {
    if (!query) {
      setData(posts);
      return;
    }
    const fuse = new Fuse(data, {
      keys: ["title", "content"],
    });
    const result = fuse.search(query);
    const finalResult = [];
    if (result.length) {
      result.forEach((item) => {
        finalResult.push(item.item);
      });
      setData(finalResult);
    } else {
      setData([]);
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header searchData={searchData} />
      <BlogList blogs={data} />
    </div>
  );
};
export default HomePage;
