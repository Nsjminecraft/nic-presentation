#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
FRONTEND_DIR="$SCRIPT_DIR/frontend"
BACKEND_DIR="$SCRIPT_DIR/backend"

echo "=== NIC Presentation - Starting Servers ==="

# Kill any existing processes on our ports
fuser -k 5000/tcp 5173/tcp 8080/tcp 2>/dev/null
sleep 1

# Build frontend
echo "[1/3] Building frontend..."
cd "$FRONTEND_DIR"
npm run build 2>&1 | tail -5

# Start backend
echo "[2/3] Starting Flask backend on :5000..."
cd "$BACKEND_DIR"
python3 -m pip install -r requirements.txt -q 2>/dev/null
nohup python3 run.py > /tmp/nic-backend.log 2>&1 &
BACKEND_PID=$!

# Start frontend dev server
echo "[3/3] Starting Vite dev server on :5173..."
cd "$FRONTEND_DIR"
nohup npm run dev > /tmp/nic-frontend.log 2>&1 &
VITE_PID=$!

sleep 3

echo ""
echo "Servers started:"
echo "  Backend (Flask):  http://localhost:5000"
echo "  Frontend (Vite):  http://localhost:5173"
echo "  Frontend PID: $VITE_PID  |  Backend PID: $BACKEND_PID"
echo ""
echo "To stop: kill $VITE_PID $BACKEND_PID"
