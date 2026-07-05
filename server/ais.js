const WebSocket = require('ws');
const aiStreamUrl = 'wss://stream.aisstream.io/v0/stream';
const socket = new WebSocket(aiStreamUrl);

if (!process.env.AIS_STREAM_KEY) {
  console.error("❌ Error: AIS_STREAM_KEY is missing from your .env file!");
  process.exit(1); 
}

const subRequest = {
  // FIX 1: Lowercase 'p' and 'key' to match the official spec
  "Apikey": process.env.AIS_STREAM_KEY, 
  
  // FIX 2: Valid bounding box hierarchy [Latitude, Longitude]
  // This bounding box covers a clean area from the US East Coast up past Boston
  "BoundingBoxes": [
    [
      [41.35, -71.52], // Bottom-Left (Southwest corner near Point Judith)
      [41.55, -71.30]  // Top-Right: higher latitude, less negative longitude
    ]
  ]  
};

socket.onopen = function (_) {
  console.log('🔌 WebSocket Connected! Sending subscription...');
  
  // Stringify exactly once and send
  const requestString = JSON.stringify(subRequest);
  socket.send(requestString);
};

socket.onmessage = function (event) {
  try {
    let aisMessage = JSON.parse(event.data);
    
    // Check if the message contains data or an error message
    if (aisMessage.Message) {
      console.log(JSON.stringify(aisMessage, null, 2)); 
    } else {
      console.log("✉️ Server message received:", aisMessage);
    }
  } catch (err) {
    console.log("✉️ Received raw text frame:", event.data);
  }
};

socket.onerror = function (error) {
  console.error('❌ WebSocket Error details:', error.message || error);
};

socket.onclose = function (event) {
  console.log(`⚠️ Connection closed.`);
  console.log(`🔹 Code: ${event.code}`);
  console.log(`🔹 Reason: ${event.reason || 'No text reason provided'}`);
};

// Keeps nodemon process alive so you can inspect frames or closure reports
setInterval(() => {}, 1000);