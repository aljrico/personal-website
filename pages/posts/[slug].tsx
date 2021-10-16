import React from 'react';
import matter from 'gray-matter';
import parsePosts from './parsePosts';
import ReactMarkdown from 'react-markdown';

function PostTemplate(props: any) {
  // This holds the data between `---` from the .md file
  const postData = props.data;
  const postContent = props.content;
  return (
    <>
      <h1>{postData.title}</h1>
      <ReactMarkdown>{postContent}</ReactMarkdown>
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
