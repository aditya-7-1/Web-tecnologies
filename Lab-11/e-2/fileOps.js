const fs = require('fs');

fs.writeFile('aditya.txt', 'Initial content by Aditya.', (err) => {
    if (err) return console.log(err);
    console.log('File created successfully');

    fs.readFile('aditya.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log('File content:', data);

        fs.appendFile('aditya.txt', '\nAppended data for Aditya.', (err) => {
            if (err) return console.log(err);
            console.log('Data appended successfully');

            fs.unlink('aditya.txt', (err) => {
                if (err) return console.log(err);
                console.log('File deleted successfully');
            });
        });
    });
});