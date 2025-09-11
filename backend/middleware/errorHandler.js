const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // logs full error stack in terminal

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
export default errorHandler;