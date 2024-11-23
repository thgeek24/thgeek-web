pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'git@github.com-thgeek-web:thgeek24/thgeek-web.git'
            }
        }

        stage('Build and Test') {
            steps {
                // Node.js and npm are now available
                sh 'node --version'
                sh 'npm --version'

                // Install dependencies
                sh 'npm ci'

                // Build the project
                sh 'npm run build'

                // Run tests
//                 sh 'CI=true npm test -- --passWithNoTests'
            }
        }

        stage('Deploy Docker Containers') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t thgeek-web:latest .'

                   // Stop and remove the old container if it exists
                   sh 'docker stop thgeek-web || true'
                   sh 'docker rm thgeek-web || true'

                   // Run the new container
                   sh 'docker run -d -p 3000:80 --name thgeek-web thgeek-web:latest'

                   // Optional: Push to a Docker registry
                   // sh 'docker push my-registry/my-frontend-app:${BUILD_NUMBER}'
                }
            }
        }
    }
    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}