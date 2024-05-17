import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //this asyncHandler is the utility function defined by us
  res.status(200).json({
    message: "chetan singh",
  });
});

export { registerUser };
