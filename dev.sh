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

# Browser bundle
deno bundle --unstable \

  --watch \

  --import-map=import_map.json

  src/browser.tsx \
  public/app.js &

# Server
deno run --unstable \

  --watch \

  --import-map=import_map.json \

  --allow-net \
  --allow-read \

  src/server.tsx &

wait
