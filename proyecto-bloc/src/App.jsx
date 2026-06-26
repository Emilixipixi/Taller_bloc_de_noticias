import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <ListaNoticias />
      </main>
    </div>
  );
}

export default App;