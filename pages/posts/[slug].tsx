import React from 'react';
import matter from 'gray-matter';
import parsePosts from './parsePosts';
import ReactMarkdown from 'react-markdown';
import generalStyles from '../../styles/Home.module.css';
import postStyles from '../../styles/post.module.css';

function PostTemplate(props: any) {
  // This holds the data between `---` from the .md file
  const postData = props.data;
  const postContent = props.content;
  return (
    <>
      <div className={generalStyles.container}>
        <main className={generalStyles.main}>
          <div className={postStyles.post}>
            {' '}
            <h1>{postData.title}</h1>
            <ReactMarkdown>{postContent}</ReactMarkdown>
          </div>
        </main>
      </div>
    </>
  );
}

PostTemplate.getInitialProps = async (context: any) => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`);

  // Parse .md data through `matter`
  const data = parsePosts(content.default);

  // Pass data to our component props
  return { ...data };
};

export default PostTemplate;
