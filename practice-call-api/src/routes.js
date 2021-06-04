import React from 'react'

import HomePage from './pages/HomePage/HomePage';
import NotfoundPage from './pages/NotfourdPage/NotfoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match}) => <ProductActionPage match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotfoundPage />
    }

]; 
export default routes;