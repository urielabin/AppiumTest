Jenkinsfile (Declarative Pipeline)

pipeline {
    agent any
    stages {
      stage('Checkout') {
      }

      stage('Compile'){
      }

      stage('Deploy'){
      }

      stage('Test') {
        sauce('saucelabs') {
          sauceconnect(useGeneratedTunnelIdentifier: true, verboseLogging: true) {
            withEnv(['HOME=$WORKSPACE']) {
              docker.image('node:6.6.0').inside {
                sh 'npm install'
                sh 'npm run test'
              }
            }
          }
        }
      }
      stage('Report') {
        step([$class: 'SauceOnDemandTestPublisher'])
      }
    }
}
