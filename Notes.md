# Module 1 - Introduction to Kubernetes



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

## Companies Using Kubernetes

- Netflix
- Spotify
- Airbnb
- Adobe
- Shopify
- Google

---

# 4. Google Borg

## What is Borg?

**Borg** is Google's internal cluster management system.

It has been used to run services like:

- Gmail
- Google Search
- YouTube
- Google Maps

Kubernetes was heavily inspired by Borg.

---

## Borg Features

- Automatic Scheduling
- Self-Healing
- High Availability
- Resource Management

---

## Example

```
Server Running Gmail
        │
Server Fails
        │
Borg moves workload to another server
        │
Users never notice
```

---

# 5. Evolution of Application Deployment

Applications evolved through four stages.

---

## Stage 1 — Physical Servers

```
One Server
    │
One Application
```

### Problems

- Expensive
- Poor resource utilization
- Difficult to scale

---

## Stage 2 — Virtual Machines

```
Physical Server

├── VM 1 → Website
├── VM 2 → Database
└── VM 3 → Email
```

### Advantages

- Better utilization
- Isolation
- Multiple applications per server

---

## Stage 3 — Containers

```
Operating System

├── Website Container
├── API Container
└── Database Container
```

### Advantages

- Lightweight
- Fast startup
- Portable
- Less memory

---

## Stage 4 — Kubernetes

```
50 Servers

│
├── 1000 Containers
│
└── Kubernetes manages everything automatically
```

---

# 6. CNCF (Cloud Native Computing Foundation)

## What is CNCF?

CNCF is an organization under the **Linux Foundation** that maintains cloud-native open-source projects.

Established in **2015**.

---

## Responsibilities

- Maintains Kubernetes
- Supports Cloud Native projects
- Organizes conferences
- Promotes open-source technologies

---

## Popular CNCF Projects

- Kubernetes
- Helm
- Prometheus
- Envoy
- Fluentd

---

# 7. Kubernetes Architecture

```
                   Kubernetes Cluster

        +-------------------------------+
        |      Control Plane            |
        |-------------------------------|
        | API Server                    |
        | Scheduler                     |
        | Controller Manager            |
        | etcd                          |
        +-------------------------------+

               /                 \

      +----------------+   +----------------+
      | Worker Node 1  |   | Worker Node 2  |
      |----------------|   |----------------|
      | Pods           |   | Pods           |
      | Kubelet        |   | Kubelet        |
      | Kube Proxy     |   | Kube Proxy     |
      | Container RT   |   | Container RT   |
      +----------------+   +----------------+
```

---

## Example

Shopping Application

```
Frontend Pod  → Worker Node 1

Backend Pod   → Worker Node 2

Database Pod  → Worker Node 2

Control Plane manages everything.
```

---

# 8. Cluster

## Definition

A **Cluster** is a group of machines (Nodes) working together to run applications.

A cluster consists of:

- Control Plane
- One or more Worker Nodes

---

## Example

```
1 Control Plane

3 Worker Nodes

↓

One Kubernetes Cluster
```

---

# 9. Node

A **Node** is a machine (physical or virtual) inside a Kubernetes cluster.

Types of Nodes:

- Control Plane Node
- Worker Node

Example

```
AWS EC2 Instance

↓

Install Kubernetes

↓

Becomes a Kubernetes Node
```

---

# 10. Control Plane (Master Node)

The Control Plane manages the entire Kubernetes cluster.

It decides:

- Where Pods should run
- Cluster health
- Scaling
- Scheduling

---

## Components

### API Server

The main entry point of Kubernetes.

Example

```bash
kubectl get pods
```

The request first reaches the **API Server**.

---

### Scheduler

Chooses the best Worker Node for a Pod.

Example

```
New Pod Created

↓

Scheduler checks CPU & Memory

↓

Assigns Pod to Worker Node 2
```

---

### Controller Manager

Ensures the cluster matches the desired state.

Example

Desired Pods = 3

```
Pod Crashes

↓

Controller detects failure

↓

Creates new Pod
```

---

### etcd

A distributed key-value database storing cluster information.

Stores:

- Pods
- Nodes
- Services
- Secrets
- ConfigMaps
- Cluster Configuration

---

# 11. Worker Node

Worker Nodes run your application.

---

## Components

### Kubelet

Communicates with the Control Plane.

Responsible for creating and monitoring Pods.

Example

```
Control Plane

↓

Run 2 Pods

↓

Kubelet creates them
```

---

### Container Runtime

Runs containers.

Examples:

- containerd
- CRI-O
- Docker (older Kubernetes versions)

---

### Kube Proxy

Handles networking and load balancing.

Example

```
Incoming Request

↓

Backend Pods

Pod 1

Pod 2

Pod 3

Pod 4

↓

Kube Proxy distributes traffic
```

---

### Pods

The smallest deployable unit in Kubernetes.

A Pod can contain:

- One container
- Multiple tightly coupled containers

Example

```
Pod

├── Nginx Container
└── Logging Sidecar Container
```

---

# Quick Revision

| Component | Purpose |
|------------|----------|
| Kubernetes | Container Orchestration Platform |
| Cluster | Group of Nodes |
| Node | Machine inside a Cluster |
| Control Plane | Manages the Cluster |
| Worker Node | Runs Applications |
| API Server | Entry Point |
| Scheduler | Assigns Pods to Nodes |
| Controller Manager | Maintains Desired State |
| etcd | Stores Cluster Data |
| Kubelet | Runs Pods on Worker Nodes |
| Container Runtime | Runs Containers |
| Kube Proxy | Networking & Load Balancing |
| Pod | Smallest Deployable Unit |

---

# Key Takeaways

- Kubernetes automates container management.
- It was created by Google and inspired by Borg.
- CNCF maintains Kubernetes.
- A Kubernetes Cluster consists of a **Control Plane** and **Worker Nodes**.
- The Control Plane manages the cluster.
- Worker Nodes run application Pods.
- Pods are the smallest deployable unit in Kubernetes.

---

> **Next Module:** Docker vs Kubernetes, Pods, ReplicaSets, Deployments, and Services.