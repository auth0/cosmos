const {
  series: { nps: series },
  concurrent: { nps: parallel }
} = require('nps-utils')

module.exports = {
  scripts: {
    default: 'nps help',
    production: {
      build: {
        script: series(
          'deploy.catchup',
          'production.directory',
          'icons.build',
          'metadata.build',
          'docs.build',
          'production.copy.docs',
          'manage.build',
          'production.copy.manage',
          'sandbox.build',
          'production.copy.redirect'
        ),
        description: 'Build for production'
      },
      directory: {
        script: 'mkdir -p build',
        description: 'Create build directory'
      },
      copy: {
        docs: {
          script: 'cp -r internal/docs/public build/docs',
          description: 'Copy generated docs site to main production build'
        },
        manage: {
          script: 'cp -r examples/manage/public build/manage',
          description: 'Copy generated manage POC to main production build'
        },
        redirect: {
          script: 'cp -r internal/redirect/* build/',
          description: 'Copy redirection script'
        }
      },
      start: {
        script: 'serve -s build',
        description: 'Start production server'
      }
    },
    test: {
      default: {
        script: series('production.build', 'test.visual', 'test.unit', 'test.integration'),
        description:
          'Check if applications build + Run visual tests + Run unit and integration tests'
      },
      visual: {
        script: 'node tooling/chromatic.js',
        description: 'Run chromatic visual tests'
      },
      unit: {
        default: {
          script: 'cd internal/test && yarn test-unit',
          description: 'Run unit tests'
        },
        watch: {
          script: 'cd internal/test && yarn test-unit-watch',
          description: 'Run unit tests in watch mode'
        }
      },
      watch: {
        script: 'cd internal/test && yarn test-watch',
        description: 'Run all tests in watch mode'
      },
      coverage: {
        script: 'cd internal/test && yarn coverage',
        description: 'Run a coverage report'
      },
      integration: {
        default: {
          script: 'cd internal/test && yarn test-integration',
          description: 'Run integration tests'
        },
        watch: {
          script: 'cd internal/test && yarn test-integration-watch',
          description: 'Run integration tests in watch mode'
        }
      }
    },
    metadata: {
      debug: {
        script: 'ts-node --project ./tooling/tsconfig.tooling.json tooling/component-metadata --debug',
        description: 'Generate metadata from components with debug mode'
      },
      dev: {
        script: 'ts-node --project ./tooling/tsconfig.tooling.json tooling/component-metadata -w',
        description: 'Generate metadata from components with watch mode'
      },
      build: {
        script: 'ts-node --project ./tooling/tsconfig.tooling.json tooling/component-metadata',
        description: 'Generate metadata from components'
      }
    },
    docs: {
      dev: {
        script: parallel('metadata.dev', 'icons.dev', 'docs.dev_site'),
        description: 'Start metadata + documentation site in dev mode'
      },
      dev_site: {
        script: 'cd internal/docs && yarn dev',
        description: 'Start documentation site in dev mode'
      },
      build: {
        script: 'cd internal/docs && yarn build',
        description: 'Build documentation site'
      }
    },
    manage: {
      dev: {
        script: 'cd examples/manage && yarn dev',
        description: 'Start manage POC in dev mode'
      },
      build: {
        script: 'cd examples/manage && yarn build',
        description: 'Build manage POC'
      }
    },
    icons: {
      dev: {
        script: 'node tooling/update-icons -w',
        description: 'Build icons with watch mode'
      },
      build: {
        script: 'node tooling/update-icons',
        description: 'Build icons'
      }
    },
    sandbox: {
      dev: {
        script: 'start-storybook -p 9001 -s build',
        description: 'Start sandbox in dev mode'
      },
      build: {
        script: 'build-storybook -c .storybook -o build/sandbox',
        description: 'Build sandbox'
      }
    },
    deploy: {
      default: {
        script: series('deploy.build', 'deploy.publish'),
        description: 'Build and publish new versions of core packages'
      },
      publish: {
        script: 'node tooling/publish.js',
        description: 'Publish new versions of core packages'
      },
      build: {
        script: 'node tooling/build.js',
        description: 'Build packages'
      },
      catchup: {
        script: 'node tooling/catchup.js && yarn install',
        description: 'Catch up with deployed version'
      }
    }
  }
}
