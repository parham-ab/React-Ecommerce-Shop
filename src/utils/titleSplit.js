// split long title to short title
const titleSplit = (title) => {
  const splittedTitle = title.split(" ");
  const newTitle = `${splittedTitle[0]} ${splittedTitle[1]} ${splittedTitle[2]}`;
  return newTitle;
};
export default titleSplit;
