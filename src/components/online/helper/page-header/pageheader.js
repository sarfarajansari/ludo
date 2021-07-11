import React from 'react';

const Pageheader = (props) => {
    return (
        <div className="page-header">
            <h1>{props.title}</h1><hr />
        </div>
    );
}

export default Pageheader;
