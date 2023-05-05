import React from 'react';
import './Entries.css';

class Entries extends React.Component{
    render(){
        /*const entries = [
            {
                id = '1',
                title = 'title',
                description = 'description'
            }
        ];*/
        return (
            <div>
                <p>moje wpisy:</p>

                <div className="entry">
                    <img src="/frontend/src/images/shirt1.png"/>
                    <div className="titleDescription">
                        <p>title</p>
                        <div className="description">
                            descirption
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Entries;