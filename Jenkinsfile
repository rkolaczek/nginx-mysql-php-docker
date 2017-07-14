pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cd web-app
yarn install
gulp copy'''
      }
    }
  }
}