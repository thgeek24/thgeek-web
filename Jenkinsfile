pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'git@github.com:thgeek24/my-fullstack-website.git'
            }
        }
        stage('Build and Test') {
            steps {
                // Run build scripts for frontend and backend
                sh 'npm ci && npm run build'
            }
        }
        stage('Deploy Docker Containers') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t my-fullstack-website-frontend:latest .'

                   // Stop and remove the old container if it exists
                   sh 'docker stop my-fullstack-website-frontend  || true'
                   sh 'docker rm my-fullstack-website-frontend  || true'

                   // Run the new container
                   sh 'docker run -d my-fullstack-website-frontend -p 3000:3000 my-fullstack-website-frontend:latest'

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