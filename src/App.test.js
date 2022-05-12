import React from 'react';
import ReactDOM from 'react-dom';
import ProjectApp from './App';
// import App from './App';

test('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<ProjectApp />, div);
    ReactDOM.unmountComponentAtNode(div)
});
