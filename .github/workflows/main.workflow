workflow "Build and deploy on push" {
  resolves = ["release"]
  on = "push"
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run install"
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run build"
  needs = ["npm install"]
}

action "release" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  secrets = ["GITHUB_TOKEN"]
  runs = "npm run release"
  needs = ["build"]
}
