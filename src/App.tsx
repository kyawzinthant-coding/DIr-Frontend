import './index.css';
import { Button } from './components/ui/button';
import { QueryProviders } from './provider/QueryProvider';
import Routes from './routes';

function App() {
  return (
    <QueryProviders>
      <Routes />
    </QueryProviders>
  );
}

export default App;
