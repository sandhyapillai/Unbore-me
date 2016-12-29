// Pipeline for building and deploying 
 node {
        stage('Checkout') {
            checkout scm
        }
        stage('Main') {
            docker.image(config.environment).inside {
                sh 'echo test'
            }
        }
        stage('Post') {
            sh 'echo test'
        }
    }
