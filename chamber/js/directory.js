const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    const companies = jsonObject['companies'];

    companies.forEach(displaycompanies);

  });

function displaycompanies(company) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let parrafofirst = document.createElement('p');
  let parrafosecond = document.createElement('p');
  let parrafothird = document.createElement('p');
  let portrait = document.createElement('img');
  let tipoorden;
  // Change the textContent property of the h2 element to contain the company's full name
  if (company.order == 1) {
    tipoorden = "st"
  } else if (company.order == 2) {
    tipoorden = "nd"
  } else if (company.order == 3) {
    tipoorden = "rd"
  } else {
    tipoorden = "th"
  }
  if (company.death == null){
    death = " ";
  }else{
    death = `Death:  ${company.death}`;
  }

  h2.textContent = `${company.companyname}`;
  parrafofirst.textContent = `${company.street}`;
  parrafosecond.textContent = `${company.city}`;
  parrafothird.textContent = `CP ${company.cp}`;
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', company.imageurl);
  portrait.setAttribute('alt', `Portait of ${company.name} ${company.companyname}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.setAttribute('class', 'companyStyle');
  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(parrafofirst);
  card.appendChild(parrafosecond);
  card.appendChild(parrafothird);


  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}