# first install chocolatey in your powershell 
|   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))    |


# 2. choco install kubernetes-cli
Navigate to your home directory:

# If you're using cmd.exe, run: cd %USERPROFILE%
cd ~
# Create the .kube directory:
mkdir .kube
# Change to the .kube directory you just created:
cd .kube

# 4 then install minikube 
choco install minikube

# 5 minikube start -> this is to start minikube cluster 

**minikube start --driver=docker** -> this is used to change the driver 

# Windows this is drivers for windows
Hyper-V - VM (preferred)
Docker - VM + Container (preferred)
VirtualBox - VM
VMware Workstation - VM
QEMU - VM (experimental)
Podman - VM + Container (experimental)
SSH - remote ssh


