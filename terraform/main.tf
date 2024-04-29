terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40.0"
    }
  }

  required_version = ">= 1.5.0"

  backend "s3" {
    bucket         = "ofe-terraform-state-bucket-salczii"
    key            = "state/terraform.tfstate"
    region         = "eu-central-1"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}

provider "aws" {
  region = "eu-central-1"
}

module "perf" {
  source = "./modules/perf"

  lambda_function_name = "website_perf_check"

  lambda_source_dir = "${path.root}/../lib/lambda-perf"
}
