#!/bin/bash

# Update packages
sudo apt-get update -y

# Install Docker
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

# Add ubuntu user to docker group
sudo usermod -aG docker ubuntu

echo "Docker installed successfully!"
docker --version

# Install Docker Compose Plugin (Docker Compose v2)
sudo apt-get install docker-compose-v2 -y

# Verify installations
docker --version
docker compose version

# ---------------------------
# Install Java (required for Jenkins)
# ---------------------------
sudo apt update -y
sudo apt install fontconfig openjdk-21-jre -y

# ---------------------------
# Install Jenkins
# ---------------------------
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key

# Add Jenkins repository
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt update -y
sudo apt install jenkins -y

# Start Jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins

echo "Jenkins installed successfully!"

# Show Jenkins status
sudo systemctl status jenkins