pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'kavyas26/devops_application'
        DOCKER_CREDENTIALS_ID = 'dockerhub'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/kavya-senthilkumar/Devops_Application.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    bat "echo %PASSWORD% | docker login -u %USERNAME% --password-stdin"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push()
                    docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push('latest')
                }
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo 'You can SSH to a server and run docker pull + run commands here'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
