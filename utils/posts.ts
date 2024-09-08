import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMetadata {
  id: string;
  title?: string;
  date?: string;
  description?: string;
  keywords?: string[];
  tags?: string[];
  ogImage?: string;
}
const postsDirectory = path.join(process.cwd(), "app/blog");

function getAllFilePaths(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFilePaths(fullPath));
    } else if (stat.isFile() && fullPath.endsWith(".mdx")) {
      results.push(fullPath);
    }
  });

  return results;
}

export function getPostsMetadata(): PostMetadata[] {
  const filePaths = getAllFilePaths(postsDirectory);

  const allPostsData: PostMetadata[] = filePaths.map((filePath) => {
    const matterResult = matter.read(filePath, { delimiters: ["{/*", "*/}"] });

    const relativePath = path.relative(postsDirectory, filePath);
    const id = relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");
    return {
      id: `/blog/${id.replace(/\/page$/, "")}`,
      ...matterResult.data,
    } as PostMetadata;
  });

  return allPostsData;
}
