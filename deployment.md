# 🐳 Docker + ☸️ Kubernetes Commands

```bash
docker build -t ashutoshkumar7761/testapplication:03 .

🔹 Why: Creates a Docker image from your Dockerfile.

docker push ashutoshkumar7761/testapplication:03

🔹 Why: Uploads the Docker image to Docker Hub.

kubectl get deployment

🔹 Why: Checks the Kubernetes deployments.

kubectl get pods

🔹 Why: Checks the Pods and their current status.

kubectl logs POD_NAME

🔹 Why: Checks the logs and errors of a specific Pod.

kubectl expose deployment my-webapp --type=LoadBalancer --port=3000

🔹 Why: Creates a Service to expose the application.

kubectl get services

🔹 Why: Checks the Kubernetes Services and exposed ports.

minikube service my-webapp

🔹 Why: Opens the application through the Minikube Service.