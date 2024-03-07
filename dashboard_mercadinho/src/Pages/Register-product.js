import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Registerproduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    Gtin:''
  });

  const [recentProducts, setRecentProducts] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicionando o novo produto à lista de produtos recentes
    const newProduct = { ...product, id: recentProducts.length + 1 };
    setRecentProducts([newProduct, ...recentProducts.slice(0, 2)]);
    // Reinicialize os campos do formulário
    setProduct({
      name: '',
      price: '',
      quantity: '',
      category: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Cadastro de Produto
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="name"
              name="name"
              label="Nome do Produto"
              value={product.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="price"
              name="price"
              label="Preço"
              type="number"
              value={product.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="quantity"
              name="quantity"
              label="Quantidade"
              type="number"
              value={product.quantity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="category"
              name="category"
              label="Categoria"
              value={product.category}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="Gtin"
              name="Gtin"
              label="Gtin"
              value={product.Gtin}
              onChange={handleChange}
            />
          </Grid>
          
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{marginTop:'15px'}}>
          Cadastrar Produto
        </Button>
      </form>

      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Últimos Produtos Cadastrados
      </Typography>
      <ul>
        {recentProducts.map((recentProduct) => (
          <li key={recentProduct.id}>
            <Typography variant="body1">
              <strong>{recentProduct.name}</strong> - R${' '}
              {Number(recentProduct.price).toFixed(2)} ({recentProduct.quantity} unidades)
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Registerproduct;
