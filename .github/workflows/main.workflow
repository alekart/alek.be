workflow "New workflow" {
  on = "push"
  resolves = ["release"]
}

action "yarn" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "install"
}

action "yarn build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["yarn"]
  runs = "build"
}

action "release" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["yarn build"]
  secrets = ["GITHUB_TOKEN"]
  runs = "release"
}
