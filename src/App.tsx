import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';


import Rootlayout from './components/layout/Rootlayout';



// assets


function App() {
  return (
    <Provider store={store}>
      <div className="container backdrop-blur bg-white/50 dark:bg-black/40 h-[90vh] w-[95vw] rounded-2xl overflow-y-hidden">
        <Rootlayout />
      </div>
    </Provider>
  );
}

export default App;
