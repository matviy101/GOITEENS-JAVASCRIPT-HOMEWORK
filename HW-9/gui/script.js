const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];


let string = "";
for (let i = 0; i < friends.length; i++) {
  string += friends[i] + ", ";
}
string = string.slice(0, -2);
console.log(string);

console.log(friends.join(", "));

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];


const index = cards.indexOf('Карточка-3');
cards.splice(index, 1);
console.log(cards);


const cardToInsert = 'Карточка-6';
cards.splice(2, 0, cardToInsert);
console.log('After adding:', cards);


const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);
if (updateIndex !== -1) {
    cards.splice(updateIndex, 1, 'Оновлена-Карточка-4'); 
}
console.log('After updating:', cards);