export const validate = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Title is required!";
  }

  if (!input.summary) {
    errors.summary = "Summary is required!";
  }

  if (!input.rating) {
    errors.rating = "Rating is required!";
  } else if (input.rating < 0 || input.rating > 100) {
    errors.rating = "Rating has to be between 0 and 100!";
  }

  if (!input.healthScore) {
    errors.healthScore = "Healthy Score is required!";
  } else if (input.healthScore < 0 || input.healthScore > 100) {
    errors.healthScore = "Healthy Score has to be between 0 and 100!";
  }

  return errors;
};
