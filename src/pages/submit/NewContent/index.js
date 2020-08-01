import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function NewContent() {
    return (
        <PageDefault>
            <h1>
                New Content
            </h1>

            <Link to="/submit/NewCategory">
                New Category
            </Link>
        </PageDefault>
    )
};

export default NewContent;