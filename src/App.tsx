import './index.css';
import { Button } from './components/ui/button';
import { QueryProviders } from './provider/QueryProvider';
import Routes from './routes';

function App() {
  return (
    <QueryProviders>
      <Routes />
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button className=" cursor-pointer">Starter Template</Button>
      </div>
    </QueryProviders>
  );
}

export default App;
