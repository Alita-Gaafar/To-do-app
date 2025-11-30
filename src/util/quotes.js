async function getQuotes() {
  const apiKey = "WhbFl7Vml7/GCJqc4BPqKw==ZSeQH9wU0z3n85sS";
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  try {
    if (!response.ok) {
      console.log(Error("There is a problem"));
    }
    const jsonData = await response.json();
    return jsonData[0].quote;
  } catch (reason) {
    console.log(reason);
  }
}

const QUOTE = getQuotes().then((quote) => quote);

export default QUOTE;