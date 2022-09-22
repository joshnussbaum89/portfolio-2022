export default function handler(req, res) {
  const { body } = req

  if (!body) {
    return res
      .status(400)
      .json({ data: 'sorry, you must fill out all required fields!' })
  }

  res.status(200).json({ body })
}
