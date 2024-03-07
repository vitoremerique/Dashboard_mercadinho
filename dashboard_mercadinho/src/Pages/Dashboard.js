import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Alert } from '@mui/material';


const produtos = [
  { id: 1, nome: 'Arroz', estoque: 10 },
  { id: 2, nome: 'Feijão', estoque: 5 },
  { id: 3, nome: 'Açúcar', estoque: 2 },
  { id: 4, nome: 'Óleo', estoque: 2 },
  
];

function Dashboard() {
  // Função para filtrar produtos com estoque baixo
  const produtosBaixoEstoque = produtos.filter(produto => produto.estoque <= 5);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              Vendas do Dia
            </Typography>
            <Typography variant="h4" component="div">
              R$ 1000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              Produtos em Estoque
            </Typography>
            <Typography variant="h4" component="div">
              {produtos.length}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              Faturamento Mensal
            </Typography>
            <Typography variant="h4" component="div">
              R$ 30,000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {produtosBaixoEstoque.length > 0 && (
        <Grid item xs={12}>
          <Alert severity="warning">
            <Typography variant="h6">Alerta de Estoque Baixo</Typography>
            <ul>
              {produtosBaixoEstoque.map(produto => (
                <li key={produto.id}>{produto.nome}</li>
              ))}
            </ul>
          </Alert>
        </Grid>
      )}
    </Grid>
  );
}

export default Dashboard;
