const student = [
    { id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'},
];

const names = student.map(s => s.name) ;
const ids = student.map(s => s.id > 40);
const bigger = student.filter( s => s.id>40);
const biggerOne = student.find( s => s.id>40);
console.log(biggerOne);