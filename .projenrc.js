const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'federico-bollotta',
  authorAddress: 'federico.bollotta@axa.it',
  cdktfVersion: '^0.8.3',
  defaultReleaseBranch: 'main',
  name: 'test_constructs',
  repositoryUrl: 'https://github.com/federico.bollotta/test_constructs.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();