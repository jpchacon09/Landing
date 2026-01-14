#!/bin/bash
echo "Building Docker image..."
docker build -t landing-test .

echo "Running container..."
# Run in background (mapped to 8001 to avoid conflicts)
docker run --rm -d -p 8001:8000 --name landing-test-container -e PORT=8000 landing-test

echo "Waiting for server to start..."
sleep 5

echo "Testing /health..."
HEALTH_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8001/health)
HEALTH_BODY=$(curl -s http://localhost:8001/health)

echo "Testing /..."
ROOT_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8001/)

echo "----------------------------------------"
echo "Results:"
echo "/health status: $HEALTH_CODE"
echo "/health body: $HEALTH_BODY"
echo "/ status: $ROOT_CODE"
echo "----------------------------------------"

if [ "$HEALTH_CODE" -eq 200 ] && [ "$ROOT_CODE" -eq 200 ]; then
    echo "✅ TESTS PASSED"
else
    echo "❌ TESTS FAILED"
fi

echo "Stopping container..."
docker stop landing-test-container
