const replyContent = document.querySelector(".reply-content");
const loading = document.getElementById("loading");
function handleClick() {
  let value = document.getElementById("answer").value;

  if (!value) {
  } else {
    loading.style.display = "flex";

    let body = {
      model: "text-davinci-003",
      prompt: value,
      max_tokens: 200,
      temperature: 0.7,
    };
    let headers = {
      Authorization:
        "Bearer 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",
    };
    axios
      .post("https://api.openai.com/v1/completions", body, {
        headers: headers,
      })
      .then((response) => {
        let reply = response.data.choices[0].text;

        loading.style.display = "none";

        replyContent.textContent = reply;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  document.getElementById("answer").value = "";
}
