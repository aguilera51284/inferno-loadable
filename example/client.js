import { hydrate } from 'inferno';
import Loadable from 'react-loadable';
import App from './components/App';

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(<App/>, document.getElementById('app'));
  });
};
