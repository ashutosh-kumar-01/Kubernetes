
# 1. What is Kubernetes?

## Definition

**Kubernetes (K8s)** is an open-source container orchestration platform used to:

- Deploy applications
- Manage containers
- Scale applications automatically
- Recover failed containers
- Perform rolling updates without downtime

Simply put,

> Kubernetes manages your containers automatically so you don't have to.

---

## What Kubernetes Does

- Starts containers
- Stops unhealthy containers
- Restarts failed containers
- Scales applications
- Distributes traffic
- Performs rolling updates
- Monitors application health

---

## Example

Imagine an online shopping application.

### Without Kubernetes

```
Container Crashes
        │
        ▼
 Website becomes unavailable
        │
Administrator manually restarts container
```

### With Kubernetes

```
Container Crashes
        │
        ▼
Kubernetes detects failure
        │
        ▼
Creates a new container automatically
        │
        ▼
Users never notice the failure
```

---

# 2. Why Kubernetes?

As applications grew, managing containers manually became difficult.

## Problems Before Kubernetes

- Manual deployment
- Manual scaling
- No self-healing
- Manual load balancing
- Downtime during updates

---

## Kubernetes Solution

| Problem | Kubernetes Solution |
|----------|--------------------|
| Manual deployment | Automated deployment |
| Manual scaling | Auto Scaling |
| Failed containers | Self-Healing |
| Manual traffic distribution | Load Balancing |
| Downtime | Rolling Updates |

---

## Example

Suppose an application normally runs **5 containers**.

When traffic suddenly increases:

Without Kubernetes

```
Admin notices traffic
        │
Manually starts more containers
```

With Kubernetes

```
Traffic increases
        │
Kubernetes automatically creates more Pods
        │
Traffic decreases
        │
Extra Pods are removed
```

---

# 3. History of Kubernetes

Kubernetes was developed by **Google** based on its internal experience managing large-scale applications.

It became open-source in **2014**.

Today it is maintained by the **Cloud Native Computing Foundation (CNCF).**

---

## Timeline

| Year | Event |
|------|-------|
| 2003 | Google created Borg |
| 2014 | Kubernetes released |
| 2015 | Donated to CNCF |
| Today | Most popular container orchestration platform |

---




# 4. Orchestration
**Orchestration in Kubernetes is the process of automatically managing, deploying, scaling, networking, and recovering containerized applications without manual intervention.**

**Example 1: Auto Scaling**
|Your app gets a sudden spike from 100 users to 10,000 users.|
|Kubernetes automatically creates more container instances (Pods) to handle the traffic.

**Example 2: Self-Healing**
|One of your application's Pods crashes.|
|Kubernetes automatically detects the failure and starts a new Pod to replace it, keeping the application running.



# 5. Kubernetes Architecture


Kubernetes Architecture

Kubernetes architecture consists of a Control Plane (manages the cluster) and Worker Nodes (run the applications).

                  Kubernetes Cluster
        ┌─────────────────────────────────┐
        │         Control Plane           │
        │  - API Server                   │
        │  - Scheduler                    │
        │  - Controller Manager           │
        │  - etcd                         │
        └─────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
   Worker Node 1       Worker Node 2
   ┌──────────────┐     ┌──────────────┐
   │ kubelet      │     │ kubelet      │
   │ kube-proxy   │     │ kube-proxy   │
   │ Pods         │     │ Pods         │
   │ Container    │     │ Container    │
   │ Runtime      │     │ Runtime      │
   └──────────────┘     └──────────────┘
Components (Short Definitions)
# 1. Control Plane (Master Node)
Manages the entire Kubernetes cluster and makes decisions.

**API Server – Entry point for all Kubernetes commands and requests.**
**Scheduler – Decides which worker node should run a new Pod.**
**Controller Manager – Ensures the cluster stays in the desired state (restarts failed Pods, maintains replicas).**
**etcd – A key-value database that stores all cluster configuration and state.**


# 2. Worker Node
Runs the actual applications.

**kubelet – Communicates with the Control Plane and manages Pods on the node.**
**kube-proxy – Handles networking and routes traffic to Pods.**
**Container Runtime – Runs containers (e.g., containerd).**
**Pods – Smallest deployable unit in Kubernetes that contains one or more containers.**
**Easy Example**

# Suppose you deploy a website with 3 Pods:
You run kubectl apply.
The API Server receives the request.
The Scheduler chooses worker nodes.
The kubelet starts the Pods.
If one Pod crashes, the Controller Manager creates a new one automatically.
kube-proxy routes user traffic to the running Pods.


# Node Node in Kubernetes
# Definition:
A Node is a physical or virtual machine in a Kubernetes cluster that runs your application containers (Pods).

|Main Components of a Node|
**kubelet – Manages Pods and communicates with the Control Plane.**
**kube-proxy – Handles networking and routes traffic to Pods.**
**Container Runtime – Runs the containers (e.g., containerd).**
**Pods – The applications running on the node.**

Example
Suppose you have 2 worker nodes:

Node 1 → Runs Pod A and Pod B
Node 2 → Runs Pod C

If Node 1 fails, Kubernetes automatically schedules new Pods on Node 2 or another available node (if capacity exists).

In one line:
A Node is a machine (physical or virtual) where Kubernetes runs Pods (applications).

Cluster
Cluster in Kubernetes

Definition:

A Kubernetes Cluster is a group of one Control Plane and one or more Worker Nodes that work together to run and manage containerized applications.

# Simple Diagram
            Kubernetes Cluster
      ┌─────────────────────────┐
      │     Control Plane       │
      └──────────┬──────────────┘
                 │
      ┌──────────┴──────────┐
      │                     │
  Worker Node 1        Worker Node 2
     (Pods)               (Pods)
Example

A company wants to run an e-commerce application:

1 Control Plane manages the cluster.
3 Worker Nodes run the application's Pods.
If one worker node fails, Kubernetes moves the Pods to another healthy node (if capacity is available).