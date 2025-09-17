pipeline {
    agent any

    parameters {
        booleanParam(name: 'LOCAL_DEPLOYMENT', defaultValue: false, description: 'Deploys Docker Image Locally')
        booleanParam(name: 'PUSH_TO_DOCKER', defaultValue: false, description: 'Push Docker Image to DockerHUB')
    }

    tools {
        jdk 'jdk17'
        nodejs 'nodejs20'
    }

    environment {
        SCANNER_EV = tool 'Sonar'
    }

    stages {
        stage("Clean Workspace") {
            steps {
                cleanWs()
            }
        }

        stage("Git Checkout") {
            steps {
                git branch: 'tram', url: 'https://github.com/Naman-S-Sondhiya/amazon-E-Commerce-DevSecOps.git'
            }
        }
        
        stage("GitLeaks Scan") {
            steps {
                sh 'gitleaks detect --source . -r gitleaks-report.json -f json'
            }
        }

        stage("SonarQube Analysis") {
            steps {
                withSonarQubeEnv('Sonar') {
                    sh ''' $SCANNER_EV/bin/sonar-scanner -Dsonar.projectName=amazon -Dsonar.projectKey=amazon '''
                }
            }
        }

        stage("Quality Gate") {
            steps {
                script {
                    timeout(time: 4, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                    }
                }
            }
        }

        stage("Install NPM Dependencies") {
            steps {
                sh "rm -rf node_modules"
                sh "npm ci"
            }
        }
        
        stage("NPM Security Audit") {
            steps {
                sh "npm audit --audit-level=high || true"
            }
        }
        
        stage("Build React App") {
            steps {
                sh "npm run build"
                archiveArtifacts artifacts: 'build/**/*', allowEmptyArchive: true
            }
        }
        
        stage("Security Scans") {
            parallel {
                stage("OWASP FS Scan") {
                    steps {
                        dependencyCheck additionalArguments: '''--scan ./ --disableYarnAudit --disableNodeAudit''', odcInstallation: 'owasp'
                        dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
                    }
                }
                stage("Trivy File Scan") {
                    steps {
                        sh "trivy fs . > trivyfs.txt"
                    }
                }
            }
        }

        stage("Build Docker Image") {
            steps {
                script {
                    env.IMAGE_TAG = "namanss/amazon:${BUILD_NUMBER}"
                    sh """
                        set -e
                        docker rmi -f amazon ${env.IMAGE_TAG} || true
                        docker build -t amazon -t ${env.IMAGE_TAG} .
                        docker images | grep amazon
                    """
                }
            }
        }

        stage("Trivy Scan Image") {
            steps {
                script {
                    sh """
                    echo '🔍 Running Trivy scan on amazon image'

                    # JSON report
                    trivy image -f json -o trivy-image.json amazon

                    # Table report
                    trivy image -f table -o trivy-image.txt amazon

                    # Fail build if HIGH/CRITICAL vulnerabilities found (uncomment/comment when needed)
                    trivy image --exit-code 1 --severity HIGH,CRITICAL amazon
                """
                }
            }
        }

        stage('Deploy To Container') {
            when {
                expression { params.LOCAL_DEPLOYMENT }
            }
            steps {
                script {
                    sh """
                        set -e
                        docker stop amazon || true
                        docker rm amazon || true
                        docker run -d --name amazon -p 80:80 amazon
                        sleep 5
                        docker ps | grep amazon
                    """
                }
            }
        }

        stage("Tag & Push to DockerHub") {
            when {
                expression { params.PUSH_TO_DOCKER }
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                        sh "docker tag amazon namanss/amazon:${BUILD_NUMBER}"
                        sh "docker tag amazon namanss/amazon:latest"
                        sh "echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin"
                        sh "docker push namanss/amazon:${BUILD_NUMBER}"
                        sh "docker push namanss/amazon:latest"
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'trivyfs.txt,trivy-image.json,trivy-image.txt,dependency-check-report.xml,gitleaks-report.json', allowEmptyArchive: true
            emailext (
                subject: "${currentBuild.currentResult}: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build ${currentBuild.currentResult}\nProject: ${env.JOB_NAME}\nBuild: #${env.BUILD_NUMBER}\nURL: ${env.BUILD_URL}",
                to: 'ssnaman4@gmail.com',
                attachmentsPattern: 'trivyfs.txt,trivy-image.json,trivy-image.txt,dependency-check-report.xml'
            )
        }
        cleanup {
            sh 'docker system prune -f || true'
        }
    }
}




