#!/bin/bash
echo "🛑 Stopping TPN Banker System..."

# Stop server
if [ -f "server.pid" ]; then
    kill $(cat server.pid) 2>/dev/null
    rm server.pid
    echo "✅ Server stopped"
fi

# Stop client
if [ -f "client.pid" ]; then
    kill $(cat client.pid) 2>/dev/null
    rm client.pid
    echo "✅ Client stopped"
fi

# Clean up
pkill -f "node" 2>/dev/null
echo "👋 All stopped"