import React, { Component, ReactNode } from 'react';

import Header from '@components/Header/Header';
import Main from '@components/Main/Main';

export default class App extends Component {


    render(): ReactNode {

        return <div>
            <Header />
            <Main />
        </div>
    }
}