import React from 'react';
//import './Entries.css';
import '../entry/Entry.css';
import '../singleEntrySite/singleEntrySite.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Entry from "../entry/Entry";

class SingleEntrySite extends React.Component{

    render(){
        return (
            <div className="cont">
                <div className="title">
                    <h1>title</h1>
                </div>
                <div className="description">
                    <p>Tresc wpisu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ipsum eget sodales eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam leo libero, malesuada at dolor ac, tristique malesuada enim. Quisque ex magna, consequat sed ante sed, auctor luctus est. Cras luctus arcu eros, et lacinia elit semper vitae. Vestibulum condimentum ante enim. Donec eget erat sed dolor euismod volutpat. Etiam sed lorem id ligula pharetra efficitur vitae sagittis nulla. Praesent tincidunt velit vel massa suscipit elementum. Vestibulum id euismod lacus, a egestas velit.</p>
                </div>
                <div className="comments">
                    <h6>owner</h6>
                    <p>komentarz</p>
                </div>
            </div>
        );
    }
}

export default SingleEntrySite;