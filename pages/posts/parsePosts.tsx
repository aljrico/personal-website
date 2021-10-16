import matter from 'gray-matter';

function parsePosts(content: any) {
  // Parse .md data through `matter`
  const data = matter(content);
  // Pass data to our component props
  return data;
}

export default parsePosts;
