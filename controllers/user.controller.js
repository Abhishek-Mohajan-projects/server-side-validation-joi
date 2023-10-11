const Joi = require("joi");

const registerUser = (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    return res.status(202).json({
      messsage: "user is created",
      newUser,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

const loginUser = (req, res) => {
  try {
    return res.status(202).json({
      messsage: "user is logged in",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { registerUser, loginUser };
