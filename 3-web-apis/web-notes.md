# The Web

When you go to a URL in your browser, you are making a GET request

- the data goes from your computer to the router in your home (or to the receiver in your neighorhood)
- the router sends that data to your ISP - Internet Service Provider (somehwere in your region)
- your ISP sends it to its DNS
  - DNS - Domain Name Service, it's the address book of the Internet
  - the DNS resolves the request address into an IP address
- your ISP sends the request to that IP address
- whoever receives the request handles it however they want to **_(this part is our job as web engineers)_**
- the receiver then sends a response, more or less via the same route it came from
- our computer receives and interprets the response

## URL

URL = Uniform Resource Locator

A URL carries a TON of information!

- protocol
- subdomain
- domain
- TLD - top level domain
- path (optional)
- query parameters (optional)

`http://mail.google.com/u/1/home`

`protocol://subdomain.domain.tld/path/to/somewhere?query-params=true&optional=true`

### Query Parameters

Any URL can be modified with query params. They are also called "query strings". How query params are handled is up to the site.

There's no limit to how many query params you can use on a single URL, and there's no limit to how long they can be.

Query params:

- start with a `?`
- key_name=value
- for multiple params each key=value pair is separated by a `&`

## HyperText Transfer Protocol (Secure)

Protocol that sets the rules for how information is transferred across the web. HTTPS is the secure version, most of the modern web uses this now but there are still legacy website, from before HTTPS was introduced, that still use HTTP.

### HTTP Requests

Requests include:

- a url (required)
- a method (required)
- headers (required, but can be empty)
- body (only some methods have these)
- query params (GET methods only, part of the URL)

### HTTP Responses

... we'll come back to this!

### HTTP Methods

These are the big four we use all the time:

- GET - asking for information
- POST - asking the receiver to add something to its database
- PUT - asking the receiver to change something in its database
- DELETE - asking the receiver to delete something from its database

But there are more....

- PATCH
- OPTIONS
- HEAD
- CONNECT
- TRACE
