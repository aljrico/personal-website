import { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import parsePosts from './posts/parsePosts';
import fs from 'fs';
import path from 'path';

const Posts: NextPage = (props: any) => {
  const renderExcerpts = () => {
    const postTitles = props.postTitles;
    const postExcerpts = props.postExcerpts;
    const fileNames = props.fileNames;
    const post = fileNames.map((fileName: string, i: number) => {
      const title = postTitles[i];
      const excerpt = postExcerpts[i];
      const postUrl = '/posts/' + fileName;
      return (
        <>
          <a href={postUrl} className={styles.excerptCard}>
            <h3>{title}</h3>
            <p>{excerpt}</p>
          </a>
        </>
      );
    });
    return post;
  };
  const postCards = renderExcerpts();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Posts</h2>
        <p className={styles.description}>
          Read about what I'm working on, my ideas and projects. You may also
          find some code.
        </p>

        <div className={styles.grid}>{postCards}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const getPostFiles = () => {
    const fullFileNames = fs.readdirSync(path.join('content'));
    const shortFileNames = fullFileNames.map((x: any) => x.replace('.md', ''));
    return shortFileNames;
  };
  const importPosts = async (postNames: any) => {
    const postContents = await Promise.all(
      postNames.map((postName: string) => {
        const content = import('../content/' + postName + '.md');
        return content;
      })
    );
    return postContents;
  };

  const processPosts = (postContents: any) => {
    const data = postContents.map((content: { default: any }) => {
      const data = parsePosts(content.default);
      return data;
    });
    return data;
  };

  const postNames = await getPostFiles();
  const postContents = await importPosts(postNames);
  const data = processPosts(postContents);
  const postTitles = data.map((d: any) => d.data.title);
  const postExcerpts = data.map((d: any) => d.data.excerpt || null);

  // Pass data to our component props
  return {
    props: {
      postTitles: postTitles,
      postExcerpts: postExcerpts,
      fileNames: postNames
    }
  };
}

export default Posts;
