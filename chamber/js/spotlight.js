const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject); // temporary checking for valid response and data parsing

    const companies = jsonObject['companies'];

   // companies.forEach(displaycompanies);
    for (let i = 0; i < 3; i++) {
        displaycompanies(companies[i]);
    }

  });

function displaycompanies(company) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let website = document.createElement('a');
  let phone = document.createElement('p');
  
  
  h2.textContent = `${company.companyname}`;
  website.textContent = `${company.website}`;
  phone.textContent = `${company.phone}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', company.imageurl);
  portrait.setAttribute('alt', `Logo of ${company.companyname}`);
  portrait.setAttribute('loading', 'eager');
  website.setAttribute('href', company.website); 

  // Add/append the section(card) with the h2 element
  card.setAttribute('class', 'spotsection');
  
  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(phone);
  card.appendChild(website);


  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('section.spotLite').appendChild(card);
}