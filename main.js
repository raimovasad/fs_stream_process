const { create } = require('domain');
const fs = require('fs')
const [command, title, content] = process.argv.slice(2)
console.log(command, title);

switch(command){
    case 'list':
        list();
        break;
    case 'view':
        view(title);
        break;
    case 'create':
        create(title,content);
        break;
    case 'remove':
        remove(title);
        break;
    default: console.log('Uncaught command');
}