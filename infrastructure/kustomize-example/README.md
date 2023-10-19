# Kustomize Demo

```
# Folder Structure

osi-app/
├── base/
│   ├── deployment.yaml
├── overlays/
│   ├── dev/
│   │   ├── kustomization.yaml
│   │   ├── replicas-dev.yaml
│   ├── prod/
│   │   ├── kustomization.yaml
│   │   ├── replicas-prod.yaml
├── kustomization.yaml
```

```shell

# Builds
# ...for dev 
kustomize build overlays/dev
# ...for prod
kustomize build overlays/prod


# Deploy
# ...for dev 
kubectl apply -k overlays/dev
# ...for prod
kubectl apply -k overlays/prod

```


---
_References_
```shell
# Install Kustomize on mac
brew install kustomize
```