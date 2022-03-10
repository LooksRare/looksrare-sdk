require("dotenv").config();

// Doc: https://github.com/release-it/release-it
module.exports = {
  git: {
    commitMessage: "build: Release v${version}",
    requireUpstream: false,
    pushRepo: "upstream", // Push tags and commit to the remote `upstream` (fails if doesn't exist)
    requireBranch: "master", // Push commit to the branch `master` (fail if on other branch)
    requireCommits: true, // Require new commits since latest tag
  },
  github: {
    release: true,
  },
};
