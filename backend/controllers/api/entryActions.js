const Entry = require('../../db/models/Entry');

class EntryActions {
    async login(req, res){
        if (req.isAuthenticated()){
            res.redirect("/api/entries/647e1803432cdda09313b033");
        }
        else {
            res.redirect("/api/entries/647e180d432cdda09313b035");
        }
    }
    async saveEntry(req, res) {
        const title = req.body.title;
        const description = req.body.description;

        let newEntry;

        try{
            newEntry = new Entry({
                title,
                description,
                likes: 0,
                dislikes: 0
            });

            await newEntry.save().then(() => {
                console.log('Wpis zapisany')
            });
        }catch (err){
            return res.status(422).json({message: err.message});
        }

        res.status(201).json(newEntry);
    }

    async getEntry(req, res) {
        const id = req.params.id;
        const entry = await Entry.findOne({_id: id});
        res.status(200).json(entry);
    }

    async getEntries(req, res) {
        const doc = await Entry.find({}).sort({ _id: -1 });

        res.status(200).json(doc);
    }

    async updateEntry(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;

        const entry = await Entry.findOne({ _id: id });

        entry.title = title;
        entry.description = description;

        await entry.save();

        res.status(201).json(entry);
    }

    async deleteEntry(req, res) {
        const id = req.params.id;

        await Entry.deleteOne({ _id: id});

        console.log('Wpis usuniety');
        res.sendStatus(204);
    }
}

module.exports = new EntryActions();