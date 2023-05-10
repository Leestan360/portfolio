import * as fs from 'fs';
import process from 'process';
import { graphql } from "@octokit/graphql";


const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (process.env.GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  };

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

// Define your GraphQL query and execute the request
async function fetchProfileRequest(query: string) {
  try {
    const response = await graphqlWithAuth(query);
    return response;
  } catch (error: any) {
    // Handle the error, such as logging or displaying a friendly message
    console.error(`Error making fetch github profile request: ${error.message}`);
    throw error;
  }
}

var data = JSON.stringify({
    query: `
{
  user(login:"${process.env.GITHUB_USERNAME}") { 
    name
    bio
    isHireable
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });

console.log(`Fetching profile data for ${process.env.GITHUB_USERNAME}`);
  fetchProfileRequest(data).then((response: any)=> {
    if (response.statusCode !== 200){
        throw new Error(ERR.requestFailed);
    }
    fs.writeFile("./public/profile.json", JSON.stringify(response.data), function(err){
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
    });
  })