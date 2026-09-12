resource "aws_route53_zone" "site" {
  name    = "austindennis.dev"
  comment = "DNS for the austindennis.dev portfolio"
}

output "domain_nameservers" {
  description = "Nameservers to configure at GoDaddy"
  value       = aws_route53_zone.site.name_servers
}

resource "aws_route53_record" "site_ipv4" {
  for_each = toset(["austindennis.dev", "www.austindennis.dev"])

  zone_id = aws_route53_zone.site.zone_id
  name    = each.value
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "site_ipv6" {
  for_each = toset(["austindennis.dev", "www.austindennis.dev"])

  zone_id = aws_route53_zone.site.zone_id
  name    = each.value
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}