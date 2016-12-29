// Pipeline for building and deploying 
pipeline {

    // Run on executors with the "docker" label, because it's either that or Windows here.
    agent none 

    
    stages {
        // While there's only one stage here, you can specify as many stages as you like!
        stage("build") {
            sh 'npm install && jspm install'
        }
    }

}
