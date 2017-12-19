import React, {Component} from 'react';
import I18n from "redux-i18n";
import Main from './main'
import {translations} from '../translations/translations';

const App = () => (
    <I18n translations={translations} initialLang="es">
        <Main />
    </I18n>
);
export default App