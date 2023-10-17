variable "region" {
  type        = string
  default     = "us-east-2"
  description = "AWS Region"
}

variable "namespace" {
  type        = string
  default     = "jenr"
  description = "Usually an abbreviation of your organization name, e.g. 'eg' or 'cp'"
}

variable "stage" {
  type        = string
  default     = "prod"
  description = "Usually used to indicate role, e.g. 'prod', 'staging', 'source', 'build', 'test', 'deploy', 'release'"
}

variable "name" {
  type        = string
  default     = "koa-todos"
  description = "Project name"
}

variable "image_tag" {
  type        = string
  default     = "latest"
  description = "Docker image tag"
}

variable "container_port_mappings" {
  type = list(object({
    containerPort = number
    hostPort      = number
    protocol      = string
  }))
  default = [
    {
      containerPort = 3000
      hostPort      = 3000
      protocol      = "tcp"
    }
  ]
  description = "The port mappings to configure for the container. This is a list of maps. Each map should contain \"containerPort\", \"hostPort\", and \"protocol\", where \"protocol\" is one of \"tcp\" or \"udp\". If using containers in a task with the awsvpc or host network mode, the hostPort can either be left blank or set to the same value as the containerPort"
}

variable "desired_count" {
  type        = number
  description = "The number of instances of the task definition to place and keep running"
  default     = 1
}

variable "pg_username" {
  sensitive = true
  type = string
  description = "Postgres Username"
}

variable "pg_password" {
  sensitive = true
  type = string
  description = "Postgres Password"
}