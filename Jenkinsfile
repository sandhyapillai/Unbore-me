// Pipeline for building and deploying 
 node {
        stage('Checkout') {
            checkout scm
        }
        stage('Main') {
            sh './build.sh'
        }
        stage('Post') {
            sh 'echo test'
        }
    }
