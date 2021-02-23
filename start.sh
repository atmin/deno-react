export DENO_DIR=./x/

# Run tests
deno test --unstable \
  --import-map=import_map.json \
  --lock=lock.json \
  src/ && \

# Then generate browser bundle
deno bundle --unstable \
  --import-map=import_map.json \
  --lock=lock.json \
  src/browser.tsx \
  public/app.js && \

# Then run server
deno run --unstable \
  --import-map=import_map.json \
  --lock=lock.json \
  --cached-only \
  --allow-net \
  --allow-read \
  src/server.tsx
