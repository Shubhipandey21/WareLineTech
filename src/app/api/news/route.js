export async function GET(request) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.NEWS_API_KEY}`
      );
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching tech news:", error);
      return new Response(
        JSON.stringify({ error: "Error fetching tech news" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  