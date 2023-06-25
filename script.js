const XLSX = require('xlsx');

// Read the Excel file
const workbook = XLSX.readFile('./malzeme_raporu.xlsx');
// console.log('WORKBOOOK:, ', workbook);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Extract the data from the Excel sheet
const data = XLSX.utils.sheet_to_json(worksheet);
// console.log('data:, ', data);
// Create an object to store the categories and ingredients
const categories = {};

// Iterate over the data and populate the categories object
// for(let i = 0; i < data.length; i++) {

// }
data.forEach((row) => {
const category = row['Malzeme Kategorisi'];
const ingredient = row['Malzeme Adı'];
//   console.log('category', category);
//   console.log('ingredient', ingredient);
  if (!categories[category]) {
    categories[category] = [];
  }

  categories[category].push(ingredient);
});

// Print the categories and ingredients
for (const category in categories) {
  console.log(category + ':', categories[category]);
}

// console.log( '1:', categories);
