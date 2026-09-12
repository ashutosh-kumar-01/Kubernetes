# Updating Our App — K8s Rollout

Follow these steps whenever you want to update the application running on Kubernetes (K8s).

## 1. Build the New Docker Image

Build a new Docker image with a new version/tag:

```bash
docker build -t ashutoshkumar7761/testapplication:04 .
```

> **Note:** Update the version tag (`:04`) whenever you create a new version.

---

## 2. Push the Image to the Container Registry

Push the newly created image to Docker Hub (container registry):

```bash
docker push ashutoshkumar7761/testapplication:04
```

If you face a problem while pushing the image, try:

1. Log in to Docker again:

```bash
docker login
```

2. Make sure the Docker Desktop application is running.
3. Try pushing the image again:

```bash
docker push ashutoshkumar7761/testapplication:04
```

---

## 3. Update the Kubernetes Deployment

Update the image used by the Kubernetes Deployment:

```bash
kubectl set image deployment my-webapp testapplication=ashutoshkumar7761/testapplication:04
```

Here:

* `my-webapp` → Kubernetes Deployment name
* `testapplication` → Container name
* `ashutoshkumar7761/testapplication:04` → New Docker image

---

## 4. Monitor the Rollout

Check whether Kubernetes has successfully completed the update:

```bash
kubectl rollout status deployment/my-webapp
```

If successful, you should see:

```text
deployment "my-webapp" successfully rolled out
```

---

## 5. Check the Pods

Verify that the new Pod is running:

```bash
kubectl get pods
```

The new Pod should show:

```text
READY   STATUS
1/1     Running
```

---

## Complete Rollout Flow

```text
1. Build New Docker Image
        ↓
2. Push Image to Container Registry
        ↓
3. Update Kubernetes Deployment
        ↓
4. Monitor Rollout
        ↓
5. Check Pods
        ↓
   New Version Running
```

## Quick Command Summary

```bash
# 1. Build
docker build -t ashutoshkumar7761/testapplication:04 .

# 2. Push
docker push ashutoshkumar7761/testapplication:04

# 3. Update K8s Deployment
kubectl set image deployment my-webapp testapplication=ashutoshkumar7761/testapplication:04

# 4. Monitor rollout
kubectl rollout status deployment/my-webapp

# 5. Check pods
kubectl get pods
```

> **Tip:** If there is a problem while pushing the image, run `docker login`, make sure Docker Desktop is running, and then try the `docker push` command again.


> if you want to rollback to the you older version u can simply do the same things 
**set image to the 01 and same proccess**