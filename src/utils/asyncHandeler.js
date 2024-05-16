const asyncHandler = (requestHandeler) => {
  (req, res, next) => {
    Promise.resolve(requestHandeler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// ---------------------------------------------------------------------------------- //

// creating the wrapper for handeling async functions

// const asyncHandler = () => {};
// const asyncHandler = (func = () => {});
// const asyncHandler = (func = () => {});

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/
