#!/bin/bash
echo "🚀 Starting TPN Banker System..."

# Start server
cd tpn-banker-server
nohup npm start > ../server.log 2>&1 &
echo $! > ../server.pid
echo "✅ Server started (port 3000)"

# Wait
sleep 3

# Start client
cd ../tpn-banker-client
nohup npm run dev > ../client.log 2>&1 &
echo $! > ../client.pid
echo "✅ Client started (port 5173)"

echo ""
echo "🌐 API: http://localhost:3000"
echo "🖥️  UI: http://localhost:5173"
echo "📝 Logs: server.log & client.log"
echo "📌 PIDs saved: server.pid & client.pid"
echo "✅ Done! Close terminal - apps keep running."