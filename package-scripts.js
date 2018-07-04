const { series: { nps: series }, concurrent: { nps: parallel } } = require('nps-utils')

module.exports = {
  scripts: {
    default: 'nps help',
    production: {
      build: {
        script: series(
          'production.directory',
          'icons.build',
          'overview.build',
          'production.copy.overview',
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
        overview: {
          script: 'cp -r internal/overview/public build/overview',
          description: 'Copy generated overview to main production build'
        },
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
        script: parallel('production.build', 'test.ci'),
        description: 'Check if applications build + Run visual tests'
      },
      ci: {
        script:
          'if-env TRAVIS_EVENT_TYPE=push && yarn scripts test.chromatic || echo "Skip chromatic"',
        description: 'Check if CI event is push and then run chromatic'
      },
      chromatic: {
        script: 'chromatic test --storybook-addon --script-name=sandbox --exit-zero-on-changes',
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
        script: 'cd internal/overview && yarn dev',
        description: 'Start overview site in dev mode'
      },
      build: {
        script: 'cd internal/overview && yarn build',
        description: 'Build overview site'
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
      script: 'jscodeshift -t core/codemods core/components/',
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
