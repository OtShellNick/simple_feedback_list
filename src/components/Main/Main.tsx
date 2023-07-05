import React, { Component, ReactNode } from 'react';

import data from '@helpers/data.json';

import './Main.scss';

export default class Main extends Component {

    render(): ReactNode {
        console.log(data);

        return <main>Main</main>
    }
}