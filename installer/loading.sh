#!/bin/bash

loading() {
    pid=$!
    while kill -0 $pid 2>/dev/null; do
        echo -ne "$1 \r"
        sleep 0.5
        echo -ne "$1 .\r"
        sleep 0.5
        echo -ne "$1 ..\r"
        sleep 0.5
        echo -ne "$1 ...\r"
        sleep 0.5
        echo -ne "\r\033[K"
        echo -ne "$1 \r"
        sleep 0.5
    done

    echo -ne "\033[2K"
    echo -ne "$2\r\n"
}
