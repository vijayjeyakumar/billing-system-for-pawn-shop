#!/bin/bash
echo "🚀 Starting TPN Banker System..."
echo "📦 Starting server..."
cd tpn-banker-server && npm start > server.log 2>&1 &
echo "✅ Server started (port 3005)"
echo "⏳ Waiting 5 seconds..."
sleep 5
echo "💻 Starting client..."
cd tpn-banker-client && npm run dev > client.log 2>&1 &
echo "✅ Client started (port 5173)"
echo "===================================="
echo "📊 Server logs: server.log"
echo "🎨 Client logs: client.log"
echo "🌐 API: http://localhost:3005"
echo "🖥️  UI: http://localhost:5173"
echo "🛑 Press Ctrl+C to stop both"
wait
echo "👋 Services stopped"
