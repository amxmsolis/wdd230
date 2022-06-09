window.addEventListener("load", () => {
    const params = new URL(document.location).searchParams;
    const firstName = params.get("firstName");
    const lastName = params.get("lastName");
    const title = params.get("title");
    const email = params.get("email");
    const mobile = params.get("mobile");
    const jobPosition = params.get("jobPosition");
    const memberShipLevel = params.get("memberShipLevel");
    const businessDescription = params.get("businessDescription");
    const dateTime = params.get("dateTime");
  
    document.querySelector("#firstName").innerHTML = firstName;
    document.getElementById("lastName").innerHTML = lastName;
    document.getElementById("title").innerHTML = title;
    document.getElementById("email").innerHTML = email;
    document.getElementById("mobile").innerHTML = mobile;
    document.getElementById("jobPosition").innerHTML = jobPosition;
    document.getElementById("memberShipLevel").innerHTML = memberShipLevel;
    document.getElementById("businessDescription").innerHTML = businessDescription;
    document.getElementById("dateTime").innerHTML = dateTime;
  });