export DENO_DIR=./x/

# Browser bundle
deno bundle --unstable \

  --import-map=import_map.json

  --lock=lock.json \
  --cached-only \

  src/browser.tsx \
  public/app.js \

&& \

# Server
deno run --unstable \

  --import-map=import_map.json \

  --lock=lock.json \
  --cached-only \

  --allow-net \
  --allow-read \

  src/server.tsx
