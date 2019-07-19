const truncateMidString = (string, maxChars = 50) => {
  let result = string;

  if (string.length > maxChars) {
    const front = string.substr(0, (maxChars / 2));
    const mid = "...";
    const end = string.substr(- maxChars / 2);

    result = front + mid + end;
  }

  return result;
}

export default truncateMidString
