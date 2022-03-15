const { cdktf } = require("projen");
const { NpmAccess } = require("projen/lib/javascript");
const versionFile = require("./version.json");

const scripts = {
  "cdktf:synth": "cdktf synth",
  "cdktf:build": "tsc",
  "cdktf:compile": "tsc --pretty",
  "cdktf:get": "cdktf get",
  "cdktf:synth-all": "yarn run cdktf:compile && yarn run cdktf:synth",
  "cdktf:watch": "tsc -w",
  "cdktf:test:watch": "jest --watch",
  "tacos:build": "yarn run eslint && yarn run build && yarn run cdktf:synth-all",
  "cdktf:upgrade": "npm i cdktf@latest cdktf-cli@latest",
  "upgrade:next": "npm i cdktf@next cdktf-cli@next",
};

const project = new cdktf.ConstructLibraryCdktf({
  author: "federico-bollotta",
  authorAddress: "federico.bollotta@axa.it",
  cdktfVersion: "^0.9.4",
  defaultReleaseBranch: "master",
  name: "dp-cdktf-constructs",
  repositoryUrl: "https://github.axa.com/datalab-italy/dp-cdktf-constructs.git",
  description:
    "This project is the CDKTF Construct Library for all the DP MODULES/BLUEPRINT",
  jsiiReleaseVersion: "latest",
  publishDryRun: true,
  deps: ["constructs", "@cdktf/provider-aws"],
  devDeps: ["ts-node", "cdktf-cli", "@cdktf/provider-aws", "constructs"],
  peerDeps: ["cdktf", "constructs", "@cdktf/provider-aws"],
  packageName: "@axa-datalab-it/dp-cdktf-constructs",
  prettier: true,
  gitignore: [".idea/", ".idea/*"],
  jest: true,
  license: "MIT",
  copyrightOwner: "Federico Bollotta",
  docgen: true,
  eslint: true,
  readme: {
    contents: "New content",
    filename: "README.md",
  },
  releaseToNpm: true,
  npmAccess: NpmAccess.RESTRICTED,
  publishToPypi: {
    distName: "dp-cdktf-constructs",
    module: "dp-cdktf-constructs",
  },
});

project.package.addVersion(versionFile.version);

for (const [k, v] of Object.entries(scripts)) {
  project.setScript(k, v);
}
// ADD EXCLUDE AS CDKTF DO
project.tsconfigDev.addExclude("cdktf.out");
project.addExcludeFromCleanup("cdktf.out");

//ADD INCLUDE ALL TS FILES
project.tsconfigDev.addInclude("**/*.ts");

project.synth();
