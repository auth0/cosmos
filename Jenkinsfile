pipeline {
  agent {
    label 'crew-design'
  }

  tools {
    nodejs '8.9.1-yarn-0.27.5'
  }

  environment {
  }

  options {
    timeout(time: 10, unit: 'MINUTES')
  }

  parameters {
    string(name: 'SlackTarget', defaultValue: '#design-system', description: 'Target Slack Channel for notifications')
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
      when {
        branch 'release'
      }
      steps {
        sh 'yarn deploy'
      }
    }
  }

  post {
    always { // Steps that need to run regardless of the job status, such as test results publishing, Slack notifications or dependencies cleanup
      // Publish test results
      junit allowEmptyResults: true, testResults: 'junit.xml' // Requires 'JUnit' Jenkins plugin installed
      step([$class: 'JUnitResultArchiver', testResults: 'junit.xml']) // Required for the tests trend graph

      script {
        notifySlack(params.SlackTarget);
      }

      // Recommended to clean the workspace after every run
      deleteDir()

      // Find more examples of what to add here at https://github.com/auth0/auth0-users/blob/master/Jenkinsfile#L191
    }
  }
}
