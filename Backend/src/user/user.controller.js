export const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    res.json({ messgae: "Data Recieved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
