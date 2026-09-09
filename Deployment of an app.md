**Deployment of an app**

# 1. run docker app
# 2. we use nginx image as a app
# 3. start minikube 
|-> minikube start --driver=docker|  
this will start minikube and use docker as a driver 

# 4. Create a Deployment
|-> kubectl  create  deployment my-app --image=nginx:latest |
this will create k8 deployment name my-app using nginx docker image and also create pods 

# 5. kubectl get deployment 
kubectl get deployment is used in Kubernetes to view the deployments and their current status.
NAME       READY   UP-TO-DATE   AVAILABLE   AGE
my-app     3/3     3            3           10m
**What the columns mean:**
NAME → Name of the deployment
READY → Number of ready Pods / desired Pods
UP-TO-DATE → Number of Pods running the latest configuration
AVAILABLE → Number of Pods currently available
AGE → How long ago the deployment was created

# 6. kubectl get pods
kubectl get pods is used to list the Pods running in a Kubernetes cluster and check their current status.

# 7. minikube dashboard
minikube dashboard is used to open the Kubernetes Dashboard for a Minikube cluster.
**It opens a web-based graphical interface where you can view and manage Kubernetes resources such as:**
Pods
Deployments
Services
Namespaces
ReplicaSets
Resource usage and status


# 8. kubectl expose
|-> kubectl expose deployment my-app --type=LoadBalancer --port=80 --target-port=8080 |
In Kubernetes, kubectl expose is used to create a Service for an existing Deployment, Pod, ReplicaSet, or other resource.
**Important options**
--type=LoadBalancer → Makes the Service accessible externally through a cloud Load Balancer.
--port=80 → Service port.
--target-port=8080 → Port where your application is running inside the Pod.

# 9. minikube service nginx
minikube service nginx is used to access a Kubernetes Service named nginx running inside your Minikube cluster.

# 10. kubectl get service 
kubectl get service is used to list the Services in your Kubernetes cluster and see how they are exposed.

# 11.  kubectl delete deployment my-app
|-> kubectl delete deployment my-app |
kubectl delete deployment my-app is used to delete the Kubernetes Deployment named my-app.
Deployment: my-app
       ↓
   Deleted
       ↓
Pods managed by it
       ↓
   Also deleted
**So, Kubernetes removes the Deployment and normally terminates the Pods that were created and managed by that Deployment.**

