resource "aws_resourcegroups_group" "portfolio" {
  name        = "austindennis-dev"
  description = "Resources for the austindennis.dev portfolio"

  resource_query {
    type = "TAG_FILTERS_1_0"

    query = jsonencode({
      ResourceTypeFilters = ["AWS::AllSupported"]
      TagFilters = [
        {
          Key    = "Project"
          Values = ["austindennis-dev"]
        }
      ]
    })
  }
}