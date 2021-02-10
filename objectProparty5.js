const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'},
];

const names = student.map(student => student.name) ;
console.log(names);

const ids = student.map(s => s.id > 40);
console.log(ids);

const bigger = student.filter( s => s.id>40);
console.log(bigger);

const biggerOne = student.find( s => s.id>40);
console.log(biggerOne);