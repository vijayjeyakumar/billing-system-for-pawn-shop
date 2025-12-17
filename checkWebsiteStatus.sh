#!/bin/bash
echo "🔍 Checking TPN Banker System..."

echo "Server (port 3000):"
if lsof -i :3000 >/dev/null 2>&1; then
    echo "✅ Running"
else
    echo "❌ Not running"
fi

echo ""
echo "Client (port 5173):"
if lsof -i :5173 >/dev/null 2>&1; then
    echo "✅ Running"
else
    echo "❌ Not running"
fi

echo ""
echo "📊 Process info:"
ps aux | grep -E "(npm|node)" | grep -v grep