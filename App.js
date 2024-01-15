import Rotas from './src/routes';
import TelaPadrao from './src/components/TelaPadrao';
import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}