terraform {
  backend "s3" {
    bucket       = "austindennis-dev-tfstate-521595302924"
    key          = "portfolio/prod/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}