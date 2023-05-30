import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.{ts, tsx}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql-types/': {
      preset: 'client'
    }
  }
};

export default config;
