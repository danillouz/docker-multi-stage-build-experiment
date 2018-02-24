# Docker Multi Stage Builds

Experimenting with [Docker Multi Stage Builds](https://docs.docker.com/develop/develop-images/multistage-build/)
to see image size impact.

# Tests

I ran a couple of tests modifying the `.dockerignore` the `Dockerfile` using a simple Node ExpressJS
app.

## App structure

```
src/
  app.js
package-lock.json
package.json
README.md
```
