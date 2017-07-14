pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''git checkout feature/web-app
cd web-app
yarn install
gulp copy'''
      }
    }
  }
}