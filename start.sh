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

# Browser bundle
deno bundle --importmap=import_map.json --unstable src/browser.tsx public/app.js &

# Server
deno run --importmap=import_map.json --unstable --allow-net --allow-read src/server.tsx &

wait
