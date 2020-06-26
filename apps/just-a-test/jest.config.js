module.exports = {
  name: 'just-a-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/just-a-test',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
