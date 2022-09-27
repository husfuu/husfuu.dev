import axios from "axios";
import type { InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
import useSWR from "swr";

import { mediumToBlogProps, searchContent, sortByDate } from "@/lib/helper";
import { getAllFilesMatter } from "@/lib/mdx";

import BlogCard from "@/components/cards/BlogCard";
import SkeletonCard from "@/components/cards/SkeletonCard";
import Layout from "@/components/layouts/Layout";
import Section from "@/components/layouts/Section";

import { BlogFrontmatter } from "@/types/content";
const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  const [postList, setPostList] = useState<Array<BlogFrontmatter>>([]);
  const [filteredPosts, setFilteredPosts] = useState<Array<BlogFrontmatter>>(
    []
  );
  const [postLength, setPostLength] = useState(0);

  const fetcher = async (url: string) =>
    await axios
      .get(url)
      .then((res) => res.data.items)
      .then((items) => mediumToBlogProps(items))
      .then((posts) => sortByDate([...posts, ...articles]))
      .then((posts) => {
        setFilteredPosts(posts);
        setPostList(posts);
        setPostLength(posts.length);
      });
  const { error } = useSWR(process.env.MEDIUM_API_URL, fetcher);
  return (
    <>
      <NextSeo title="Blog" />
      <Layout>
        {/*  Start Experience */}
        <Section label="Blog">
          <div className="my-8 flex items-center space-x-1">
            <input
              className="w-full rounded border-2 border-gray-300 bg-white p-2 focus:border-primary-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:focus:border-primary-500"
              type="search"
              name="search"
              placeholder="Search . . ."
              autoComplete="off"
              onChange={(e) =>
                searchContent(
                  "blog",
                  postList,
                  e.target.value,
                  setFilteredPosts,
                  setPostLength
                )
              }
            />
            <span className="rounded border-2 border-gray-300 bg-white py-2 px-4 font-bold text-primary-500 dark:border-gray-600 dark:bg-gray-900">
              {postLength}
            </span>
          </div>
          {error || postList.length < 1 ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-6 text-center">
              <p>No Item</p>
            </div>
          )}
        </Section>
        {/* End Experience */}
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const articles = await getAllFilesMatter("blog");
  return { props: { articles } };
}
