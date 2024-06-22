const fetcher = (url: string, method = "GET") =>
  fetch(`${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

export default fetcher;
