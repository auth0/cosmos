const { series: { nps: series }, concurrent: { nps: parallel } } = require('nps-utils')

module.exports = {
  scripts: {
    default: 'nps help',
    production: {
      build: {
        script: series(
          'icons.build',
          'overview.build',
          'metadata.build',
          'docs.build',
          'production.copy.docs',
          'manage.build',
          'production.copy.manage',
          'sandbox.build'
        ),
        description: 'Build for production'
      },
      copy: {
        docs: {
          script: 'cp -r internal/docs/public build/docs',
          description: 'Copy generated docs site to main production build'
        },
        manage: {
          script: 'cp -r examples/manage/public build/manage',
          description: 'Copy generated manage POC to main production build'
        }
      },
      start: {
        script: 'serve -s build',
        description: 'Start production server'
      }
    },
    test: {
      default: {
        script: parallel('production.build', 'test.ci'),
        description: 'Check if applications build + Run visual tests'
      },
      ci: {
        script:
          'if-env TRAVIS_EVENT_TYPE=push && yarn scripts test.chromatic || echo "Skip chromatic"',
        description: 'Check if CI event is push and then run chromatic'
      },
      chromatic: {
        script:
          'chromatic test --storybook-addon --script-name="scripts sandbox.dev" --exit-zero-on-changes',
        description: 'Run chromatic visual tests in CI'
      }
    },
    metadata: {
      dev: {
        script: 'node tooling/component-metadata -w',
        description: 'Generate metadata from components with watch mode'
      },
      build: {
        script: 'node tooling/component-metadata',
        description: 'Generate metadata from components'
      }
    },
    overview: {
      dev: {
        script: 'react-scripts start',
        description: 'Start overview site in dev mode'
      },
      build: {
        script: 'react-scripts build',
        description: 'Build overview site'
      }
    },
    docs: {
      dev: {
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
        script: 'start-storybook -p 9001 -s public',
        description: 'Start sandbox in dev mode'
      },
      build: {
        script: 'build-storybook -c .storybook -o build/sandbox',
        description: 'Build sandbox'
      },
      sketch: {
        script: 'SKETCH=true build-storybook -c .storybook -o build/sandbox',
        description: 'Build sandbox for sketch files'
      }
    },
    sketch: {
      default: {
        script: series('sandbox.sketch', 'sketch.story2sketch', 'sketch.cleanup'),
        description: 'Generate asketch file from sketch components'
      },
      story2sketch: {
        script: 'story2sketch --input=build/sandbox/iframe.html --output=dist/asketch.json',
        description: 'Pick components from sandbox to build asketch file'
      },
      cleanup: {
        script: 'node tooling/cleanup-sketch.js',
        description: 'Clean up generated asketch file'
      }
    },
    codemods: {
      script: 'jscodeshift -t src/codemods src/components/',
      description: 'Run codemod on components'
    },
    deploy: {
      default: {
        script: 'node tooling/publish.js',
        description: 'Publish new versions of core packages'
      },
      catchup: {
        script: 'node tooling/catchup.js && yarn install',
        description: 'Catch up with deployed version'
      }
    }
  }
}
