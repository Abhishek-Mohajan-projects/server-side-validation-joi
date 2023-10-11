exports.runValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const errorList = error.details.map((error) => error.message);
      return res.status(201).json({
        message: "something wrong",
        errorList,
      });
    }
    next();
  };
};
