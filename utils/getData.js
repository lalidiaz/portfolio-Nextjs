import fs from "fs";
import path from "path";

// read the json files inside database
const dataDirectory = path.join(process.cwd(), "database");

const parse = (name) => {
  const filePath = path.join(dataDirectory, name);
  const fileContents = fs.readFileSync(filePath);
  const jsonContent = JSON.parse(fileContents);
  return jsonContent;
};

// all projects
export function getProjectsData() {
  const parseData = parse("projects.json");
  return parseData;
}

// get project
export function getProject(path) {
  const projects = getProjectsData();
  const filteredContent = Object.values(projects).filter(
    (element) => element.slug === path
  );
  return filteredContent;
}

// get paths
export function getPaths() {
  const projects = getProjectsData();
  const paths = Object.values(projects).map((element) => element.slug);

  return paths.map((path) => {
    return {
      params: {
        slug: path,
      },
    };
  });
}

//get artitles
export function getArticlesData() {
  const parseData = parse("articles.json");
  return parseData;
}
