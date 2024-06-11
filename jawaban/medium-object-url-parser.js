const urlParser = (url) => {
  const result = ["", "", ""];
  let j = 0;

  for (let i = 0; i < url.length; i++) {
    if (url.charAt(i) != ":") {
      if (url.charAt(i) != "/") {
        result[j] += url.charAt(i);
      }
    }

    if (url.charAt(i) == ":") {
      i += 2;
    }

    if (url.charAt(i) == "/") {
      j++;
    }
  }

  console.log("🚀 protocol  : ", result[0]);
  console.log("🚀 domain    : ", result[1]);
  console.log("🚀 username  : ", result[2] ? result[2] : "not available");
};

urlParser("https://facebook.com/fooo");
urlParser("https://google.com/");
