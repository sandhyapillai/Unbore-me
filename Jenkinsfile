// Pipeline for building and deploying
 node {
  withCredentials([[$class: 'StringBinding', credentialsId: 'HEROKU_API_KEY', variable: 'HKEY']]) {
    stage('Checkout') {
        checkout scm
    }
    stage('Main') {
        sh './build.sh'
    }
    stage('Deploy') {
        sh './deploy.sh $HKEY'
    }
  }
}
