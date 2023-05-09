const Entry = require('../../db/models/Entry');

module.exports = {
    saveEntry(req, res) {
        const newEntry = new Entry({
            title: 't1',
            description: 'd1',
            image: 'i1',
            likes: 0,
            dislikes: 0
        });

        newEntry.save().then(() => {
            console.log('Notka zapisana')
        });

        res.send('Strona główna');
    }
}
