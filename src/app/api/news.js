// pages/api/technews.js
export default async function handler(req, res) {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.NEWS_API_KEY}`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
        console.log("error",error)
      res.status(500).json({ error: 'Error fetching tech news' });
    }
}

