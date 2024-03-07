import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Simular pesquisa de produtos (você pode substituir isso por uma chamada de API)
    const results = mockProductSearch(searchQuery);
    setSearchResults(results);
  };

  // Função de pesquisa de produtos simulada
  const mockProductSearch = (query) => {
    // Aqui você pode implementar a lógica de pesquisa de produtos
    // Por agora, estamos apenas retornando uma lista de produtos fictícios
    const allProducts = [
      { id: 1, name: 'Produto 1', price: 10.0, quantity: 100, Gtin:1234 },
{ id: 2, name: 'Produto 2', price: 15.0, quantity: 50, Gtin:1234 },
{ id: 3, name: 'Produto 3', price: 20.0, quantity: 200, Gtin:1234 }
    ];
    // Filtrar os produtos com base na consulta de pesquisa
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Pesquisar Produtos
      </Typography>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          fullWidth
          id="search"
          label="Digite o nome do produto"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Pesquisar
        </Button>
      </form>
      {searchResults.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Resultados da Pesquisa:</Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
            {searchResults.map((product) => (
              <Card key={product.id} style={{ margin: '10px', minWidth: '200px' }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Preço: R$ {product.price}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Quantidade: {product.quantity} unidades
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      )}
      {searchResults.length === 0 && searchQuery && (
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Nenhum produto encontrado.
        </Typography>
      )}
    </div>
  );
}

export default ProductSearch;


