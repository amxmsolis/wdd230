window.addEventListener("load", () => {
    const params = new URL(document.location).searchParams;
    const givenName = params.get("givenName");
  
    document.querySelector("#givenName").innerHTML = givenName;
  });