// eslint-disable-next-line @typescript-eslint/no-unused-vars -- CloudFront invokes this entry point.
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var lastSegment = uri.substring(uri.lastIndexOf("/") + 1);
  var needsSlash = !uri.endsWith("/") && lastSegment.indexOf(".") === -1;
  var isWww = request.headers.host.value === "www.austindennis.dev";

  if (needsSlash || isWww) {
    var path = needsSlash ? uri + "/" : uri;
    var parts = [];

    Object.keys(request.querystring).forEach(function (key) {
      var entry = request.querystring[key];
      var values = entry.multiValue || [entry];

      values.forEach(function (item) {
        parts.push(key + "=" + item.value);
      });
    });

    var query = parts.length ? "?" + parts.join("&") : "";

    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: {
          value: "https://austindennis.dev" + path + query,
        },
      },
    };
  }

  if (uri.endsWith("/")) {
    request.uri += "index.html";
  }

  return request;
}
