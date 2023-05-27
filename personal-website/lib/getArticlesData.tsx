import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/articles/displayed_articles');

export function getArticlesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // get titles and dates
    const title : string = matterResult.data.title;
    const subtitle = matterResult.data.subtitle;
    const dateCreated = matterResult.data.dateCreated;
    const dateModified = matterResult.data.dateModified;
    const priority = +matterResult.data.priority; // + casts to number

    // returns titles and dates
    return {
      id, title, subtitle, dateCreated, dateModified, priority
    };
  });
  // Sort posts by date 
  return allPostsData.sort((a, b) => {
    if (a.priority < b.priority) {
      return 1;
    } else {
      return -1;
    }
  });
}