import { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import parsePosts from './posts/parsePosts';
import fs from 'fs';
import path from 'path';

const Posts: NextPage = (props: any) => {
  const renderExcerpts = () => {
    const content = props.data;
    const fileNames = props.fileNames;
    const post = content.map((c: any, i: number) => {
      const postPath = fileNames[i];
      const postUrl = '/posts/' + postPath;
      return (
        <a href={postUrl} className={styles.excerptCard}>
          <h3>{c.data.title}</h3>
          <p>{c.data.excerpt}</p>
        </a>
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

Posts.getInitialProps = async () => {
  const getPostFiles = () => {
    const files = fs.readdirSync(path.join('content'));
    return files;
  };
  const importPosts = async (postNames: any) => {
    const postContents = await Promise.all(
      postNames.map((postName: string) => {
        const content = import('../content/' + postName);
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

  const postNames = getPostFiles();
  const postContents = await importPosts(postNames);
  const data = processPosts(postContents);

  // Pass data to our component props
  return { data: data, fileNames: postNames };
};

export default Posts;
