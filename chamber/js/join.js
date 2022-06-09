document.getElementById('dateTime').value = new Date().toString();

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
    document.querySelector("#lastName").innerHTML = lastName;
    document.querySelector("#title").innerHTML = title;
    document.querySelector("#email").innerHTML = email;
    document.querySelector("#mobile").innerHTML = mobile;
    document.querySelector("#jobPosition").innerHTML = jobPosition;
    document.querySelector("#memberShipLevel").innerHTML = memberShipLevel;
    document.querySelector("#businessDescription").innerHTML = businessDescription;
    document.querySelector("#dateTime").innerHTML = dateTime;
  });