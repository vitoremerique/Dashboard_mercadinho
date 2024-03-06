import * as React from 'react';

const Header = () => {
  return (
    <header style={styles.container} >
      <div style={styles.titlem_mid}>Dashboard mercadinho</div>
    </header>
  );
};

export default Header;


const styles = {
  container:{
    flex:1,
    backgroundColor: '#d9d9d2a2',
    padding: '10px',
    width: '100%',
    height: '20px',
    borderBottom: '1px solid black'
    
    
  },
  titlem_mid:{
    flex:1,
    textAlign: 'center'

  }
}