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
  let h3 = document.createElement('h3');
  let parrafofirst = document.createElement('p');
  let parrafosecond = document.createElement('p');
  let parrafothird = document.createElement('p');
  let portrait = document.createElement('img');
  let website = document.createElement('a');
  let phone = document.createElement('p');
  
  
  h2.textContent = `${company.companyname}`;
  h3.textContent = `${company.membership}`;
  parrafofirst.textContent = `${company.street}`;
  parrafosecond.textContent = `${company.city}`;
  parrafothird.textContent = `CP ${company.cp}`;
  website.textContent = `${company.website}`;
  phone.textContent = `${company.phone}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', company.imageurl);
  portrait.setAttribute('alt', `Logo of ${company.companyname}`);
  portrait.setAttribute('loading', 'eager');
  website.setAttribute('href', company.website); 

  // Add/append the section(card) with the h2 element
  card.setAttribute('class', 'companyStyle');
  h3.setAttribute('class', company.membership);
  
  card.appendChild(h2);
  card.appendChild(portrait);
  card.appendChild(h3);
  card.appendChild(parrafofirst);
  card.appendChild(parrafosecond);
  card.appendChild(parrafothird);
  card.appendChild(phone);
  card.appendChild(website);


  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}