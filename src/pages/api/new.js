const { API_DATA, API_TOKEN } = process.env;

/** @param {import("next").NextApiRequest} req @param {import("next").NextApiResponse} res */
export default async function handler(req, res) {
  const { method } = req;
  if (method === 'POST') {
    try {
      const data = await fetch(API_DATA, {
        headers: new Headers({
          Authorization: `Token ${API_TOKEN}`,
          token: API_TOKEN,
          'Content-Type': 'application/json',
        }),
        method: 'POST',
        body: req.body,
      }).then((r) => r.json());
      res.status(200).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Server not response, please try again' });
    }
  }
}
