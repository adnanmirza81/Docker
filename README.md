Node.js application for tutorial series

Part-1 => https://blog.kloia.com/deploy-auto-scalable-node-js-application-on-kubernetes-cluster-part-1-f40e622f2337

Part-2 => https://blog.kloia.com/deploy-auto-scalable-node-js-application-on-kubernetes-cluster-part-2-d41164d72dcb


This package consists of the following files:

node_test.js - Very simple Node.js app.
Dockerfile - The docker build file.
k8s - Contains the kubernetes cluster information.
package.json - Node.js package info
package-lock.json - Node.js gunk


Update Controller Credentials in Node.js Agent
Open the "node_test.js" app in the root of the sample app. 
Update the credentials in the require block



Build Docker File and Push it to public repository 
To build you will need to use your docker user id and the name of your public repository (docker id/docker repo) . 

Build the docker file. 

docker build -t dockerid/dockerrepo
Push it to the repository.

docker push dockerid/dockerrepo


Update Image
Now that the files have been updated open up the "deployment.yaml" file in the "k8s" directory and replace the "image" name with the image of your public repository.

Apply the Kubernetes Configs to your cluster
Open Command Prompt and Navigate to the root of the app directory from Step 5.
Run the following command.
kubectl apply -f k8s

Step 9: Start the service
Now let's start the service!

service node-js-sample
