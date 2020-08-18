import { init } from '@rematch/core';
import * as models from './models';

const redux = {
    devtoolOptions: {
        disabled: process.env.NODE_ENV === 'production',
    },
};

const store = init({
    models,
    redux,
});

export default store;