# Koa Todos

Simple Todo Application using Koajs!

## Getting started

The nix shell will get you all the tools you need to get started
run `nix-shell` with nix installed to enter the environment


## Test and Build

you can test the app by running `npm run test` in the development environment
you can build the app with `npm run build`

### Terraform
The `_terraform` directory contains infrastructure definitions required to run this app on AWS

<hr>

the following environment variables are required:
* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`

<hr>

enter the `_terraform` directory and run `terraform init` from the `nix-shell` then run `terraform apply`
you will need to change some variables in `_terraform/variables.tf` to use this deployment yourself
you will also need to change the availablity zones in `_terraform/main.tf` as well as the repository mentioned in the iam policy

#### Github Actions
The `buildAndDeploy.yaml` GitHub workflow will update the production deployment of the app

<hr>

the following changes may be required:
* update the `AWS_REGION` variable
* change the `IAM_ROLE_ARN` to the value output from `terraform apply` 