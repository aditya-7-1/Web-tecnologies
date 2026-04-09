const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log('First listener: Hello ' + name);
});

myEmitter.on('greet', (name) => {
    console.log('Second listener: Welcome back, ' + name);
});

myEmitter.emit('greet', 'Aditya');