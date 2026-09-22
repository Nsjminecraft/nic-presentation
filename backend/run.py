#!/usr/bin/env python3
from app import app

if __name__ == '__main__':
    print("\n🚀 NIC Presentation Server")
    print("   Running at: http://localhost:5000\n")
    app.run(host='0.0.0.0', port=5000, debug=True)
