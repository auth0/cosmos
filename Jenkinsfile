pipeline {
  agent {
    label 'crew-brokkr'
  }

  tools {
    nodejs '8.9.1'
  }

  environment {
    NPM_TOKEN = credentials('auth0npm-npm-token')
  }

  options {
    timeout(time: 10, unit: 'MINUTES')
  }

  parameters {
    string(name: 'SlackTarget', defaultValue: '#design-system-feed', description: 'Target Slack Channel for notifications')
  }

  stages {
    stage('SharedLibs') { // Required. Stage to load the Auth0 shared library for Jenkinsfile
      steps {
        library identifier: 'auth0-jenkins-pipelines-library@master', retriever: modernSCM(
          [$class: 'GitSCMSource',
          remote: 'git@github.com:auth0/auth0-jenkins-pipelines-library.git',
          credentialsId: 'auth0extensions-ssh-key'])
      }
    }
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn build'
      }
    }
    stage('Publish') {
      steps {
        sh "echo //registry.npmjs.org/:_authToken=${env.NPM_TOKEN} > .npmrc"
        sh "npm scripts deploy"
      }
    }
  }

  post {
    always {
      notifySlack(params.SlackTarget);
      deleteDir()
    }
  }
}
