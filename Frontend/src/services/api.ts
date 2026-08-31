const API_URL = "https://geowatch-backend-cmrc.onrender.com";

export const analyzeLocation = async (
  latitude: number,
  longitude: number
) => {
  const response = await fetch(`${API_URL}/analyze-location`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      latitude,
      longitude,
    }),
  });

  return response.json();
};