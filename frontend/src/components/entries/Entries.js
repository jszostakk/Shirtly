import React from 'react';
import axios from "../../axios";
//import './Entries.css';
import '../entry/Entry.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Entry from "../entry/Entry";
import NewEntry from "../newEntry/newEntry";
import Modal from 'react-modal';
import EditEntry from "../EditEntry/EditEntry";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Entries extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            entries: [],

            showEditModal: false,
            editEntry: {}
        };
    }

    componentDidMount() {
        this.fetchEntries();
    }

    async fetchEntries(){
        const res = await axios.get('/entries');
        const entries = res.data;

        this.setState({entries})
    }
    async deleteEntry(id){
        const entries = [...this.state.entries].filter(entry => entry._id !== id);
        await axios.delete('/entries/' + id)
        this.setState({entries});
    }

     async addEntry(entry){
        const entries = [...this.state.entries];

         try{
             const res = await axios.post('/entries', entry);
             const newEntry = res.data;

             entries.push(newEntry);
             this.setState({entries});
         } catch(err){
             NotificationManager.error(err.response.data.message);
         }
    }

    async editEntry(entry){
        await axios.put('/entries/' + entry._id, entry)

        const entries = [...this.state.entries];
        const index = entries.findIndex(x => x._id === entry._id)
        if(index >= 0){
            entries[index] = entry;
            this.setState({entries});
        }
        this.toggleModal();
    }

    toggleModal(){
        this.setState(
            {showEditModal: !this.state.showEditModal});
    }

    editEntryHandler(entry){
        this.toggleModal();
        this.setState({editEntry: entry});
    }

    render(){
        return (
            <div className="cont">
                <NotificationContainer/>
                <NewEntry
                    onAdd={(entry) => this.addEntry(entry)}
                />

                <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel = "Edytuj wpis" >
                    <EditEntry
                        title={this.state.editEntry.title}
                        description={this.state.editEntry.description}
                        id={this.state.editEntry._id}
                        onEdit={entry => this.editEntry(entry)} />
                    <button onClick={() => this.toggleModal()}>Anuluj</button>
                </Modal>
                {this.state.entries.map(entry => (
                    <Entry
                        key={entry._id}
                        title={entry.title}
                        description={entry.description}
                        id={entry._id}
                        onEdit={(entry) => this.editEntryHandler(entry)}
                        onDelete = {(id) => this.deleteEntry(id)}
                    />
                ))}
            </div>
        );
    }
}

export default Entries;