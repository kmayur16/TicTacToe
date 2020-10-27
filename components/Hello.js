import React from 'react';

const Hello =() => {
    /* return (
        <div>
            <h1>hello all</h1>
        </div>
    ) */
    return React.createElement('div',
    {id: 'hello',className: 'dummyClass'},
    React.createElement('h1',null,'hello mayur'))
}

export default Hello;