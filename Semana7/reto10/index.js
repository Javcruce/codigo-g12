const inputText = document.querySelector("#input-text");
const btnTranslate = document.querySelector("#btn-translate");

btnTranslate.onclick = async function () {
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "es");
  encodedParams.append("text", inputText.value);

  const response = await fetch(
    "https://text-translator2.p.rapidapi.com/translate",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "b5657878f2mshcaf7d95f6103647p1f3120jsnbe67f1f13e54",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: encodedParams,
    }
  );
  const data = await response.json();
  console.log(data);
};