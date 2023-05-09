const Entry = require('../../db/models/Entry');

class EntryActions {
    saveEntry(req, res) {
        // const newEntry = new Entry({
        //     title: 't1',
        //     description: 'd1',
        //     image: 'i1',
        //     likes: 0,
        //     dislikes: 0
        // });
        //
        // newEntry.save().then(() => {
        //     console.log('Notka zapisana')
        // });
        const title = req.body.title;
        const description = req.body.description;
        const image = req.body.image;
        const likes = 0;
        const dislikes = 0;

        res.send(''+title+description);
    }

    getEntry(req, res) {
        res.send('');
    }

    getEntries(req, res) {
        res.send('dziala');
    }

    updateEntry(req, res) {
        res.send('');
    }

    deleteEntry(req, res) {
        const id = req.params.id;
        res.send('' + id);
    }
}

module.exports = new EntryActions();