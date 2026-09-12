resource "aws_route53_zone" "site" {
  name    = "austindennis.dev"
  comment = "DNS for the austindennis.dev portfolio"
}

output "domain_nameservers" {
  description = "Nameservers to configure at GoDaddy"
  value       = aws_route53_zone.site.name_servers
}