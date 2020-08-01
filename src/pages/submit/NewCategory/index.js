import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function NewCategory() {
    return (
        <PageDefault>
            <h1>
                New Category
            </h1>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
};

export default NewCategory;