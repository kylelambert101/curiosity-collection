export const convertToTitleCase = (str: string) => {
  return (
    str
      // Split on spaces
      .split(" ")
      // Capitalize the first letter of each word
      .map((word) =>
        word.length > 0
          ? word[0].toUpperCase() + word.substr(1).toLowerCase()
          : word
      )
      // Join capitalized words back into one string
      .join(" ")
  );
};
