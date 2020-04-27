let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }, 
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    },
 ];

 let searchField = prompt('type first/last name here', ' ');

 let adjustSearchField = searchField[0].toUpperCase() + searchField.toLowerCase().slice(1)

 let artist = data.filter (item => item.firstName == adjustSearchField || item.lastName == adjustSearchField);

 artist.length ? console.log (artist) : console.log ('hollywood is on shutdown')