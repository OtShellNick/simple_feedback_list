import React, { Component, ReactNode } from 'react';

import Watch from '@/modules/Watch/Watch';

import LogoImg from '@assets/logoipsum.png';

import './Header.scss';

export default class Header extends Component {

    render(): ReactNode {

        return <header className='header'>
            <img className='header__logo' src={LogoImg} alt="logo" />
            <div>
                <Watch />
            </div>
        </header>
    }
}