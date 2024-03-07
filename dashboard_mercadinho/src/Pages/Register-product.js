import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Product() {
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
    // Simulação de adicionar o produto aos produtos recentes
    const updatedProducts = [product, ...recentProducts.slice(0, 2)];
    setRecentProducts(updatedProducts);
    // Reinicialize os campos do formulário
    setProduct({
      name: '',
      price: '',
      quantity: '',
      category: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Cadastro de Produto
        </Typography>
        <Grid container spacing={2}>
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
      <Typography variant="h5" gutterBottom>
        Últimos Produtos Cadastrados
      </Typography>
      <Grid container spacing={2}>
        {recentProducts.map((recentProduct, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{recentProduct.name}</Typography>
                <Typography>Preço: R${recentProduct.price}</Typography>
                <Typography>Quantidade: {recentProduct.quantity}</Typography>
                <Typography>Categoria: {recentProduct.category}</Typography>
                <Typography>Gtin: {recentProduct.Gtin}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Product;
