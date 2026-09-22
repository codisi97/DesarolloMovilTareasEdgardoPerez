import React from 'react';
import ProviderProducto from './Providers/ProviderProducto';
import AgregarProducto from './pages/AgregarProducto';

export default function App() {

  return (

    <ProviderProducto>

      <AgregarProducto />

    </ProviderProducto>

  );
}