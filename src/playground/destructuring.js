//
// Object destructuring
//

const book = {
    title: 'The Artists Way',
    author: 'Caroline M.',
    publisher: {
        // 'name': 'Vintage'
    }
}
const { name : PublisherName = 'Self-Published' } = book.publisher;
console.log(PublisherName);

//
// Array destructuring
//
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ coffee, ,price ] = item;

console.log(`A medium ${coffee} costs ${price}`);
