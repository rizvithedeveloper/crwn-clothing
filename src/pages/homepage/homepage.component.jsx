import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = (props) => {
    return (
        <div className="homepage">
            {
                console.log(props)
            }
            <Directory />
        </div>
    )
}

export default HomePage;