intexit() {
    # Kill all subprocesses (all processes in the current process group)
    kill -HUP -$$
}

hupexit() {
    # HUP'd (probably by intexit)
    echo
    echo "Interrupted"
    exit
}

trap hupexit HUP
trap intexit INT

export DENO_DIR=./x/

# Cache dependencies
deno cache --unstable \
  --import-map=import_map.json \
  --lock=lock.json \
  --lock-write \
  src/*

# `deno test --watch` does not yet work

# Browser bundle, regenerate on file change
deno bundle --unstable \
  --watch \
  --import-map=import_map.json \
  --lock=lock.json \
  src/browser.tsx \
  public/app.js &

# Run server, reload on file change
deno run --unstable \
  --watch \
  --import-map=import_map.json \
  --lock=lock.json \
  --cached-only \
  --allow-net \
  --allow-read \
  src/server.tsx &

wait
