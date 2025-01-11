export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  res.statuscode(200).json({
    message: "You are signup succesfully",
  });
};
export const signin = async (req, res) => {
    const {email,password } = req.body;

    const token = 

    res.statuscode(200).json({
        message:"You are signin",
        token: token
    })
};
export const createRoom = async (req, res) => {};
