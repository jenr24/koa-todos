terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-2"
  shared_credentials_files = ["%USERPROFILE%/.aws/credentials"]
}

resource "aws_instance" "koa_todos" {
  ami           = "ami-080c09858e04800a1"
  instance_type = "t2.micro"

  tags = {
    Name = "KoaTodos"
  }
}