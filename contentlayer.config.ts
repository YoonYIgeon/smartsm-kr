// file: contentlayer.config.ts
import rehypePrettyCode from 'rehype-pretty-code';
import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    cover: { type: "string", required: true },
    summary: { type: "string", required: true },
    featured: { type: "boolean", required: true },
    publishedAt: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

const prettyCodeOptions = {
  // Use one of Shiki's packaged themes
  theme: "kanagawa-wave",
  // Set to true to keep the background color
  keepBackground: true ,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any, id: any) {
    node.properties.className = ["word"];
  },
};

export default makeSource({ contentDirPath: "posts", documentTypes: [Post], mdx: {rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]} });
