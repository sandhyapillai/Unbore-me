// Pipeline for building and deploying 
 node {
        stage('Checkout') {
            checkout scm
        }
        stage('Main') {
            sh 'npm install && jspm install'
        }
        stage('Post') {
            sh 'echo test'
        }
    }
