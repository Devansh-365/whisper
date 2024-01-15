let BASE_URL = "https://whisper-95lw.onrender.com";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8080";
}

export { BASE_URL };
