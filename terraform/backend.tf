terraform {
  backend "s3" {
    bucket  = "tfstate-koa-todos"
    key     = "production/terraform.tfstate"
    region  = "us-east-2"
    encrypt = true
  }
}