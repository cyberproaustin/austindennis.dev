provider "aws" {
  region              = "us-east-1"
  allowed_account_ids = ["521595302924"]

  default_tags {
    tags = {
      Project     = "austindennis-dev"
      Environment = "prod"
      ManagedBy   = "Terraform"
    }
  }
}