import { useState } from 'react';
import { Drawer } from './components/Drawer';
import { menuData } from './lib/data';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className='w-full h-screen bg-gray-300 flex items-center justify-center'>
      <button
        onClick={() => setIsOpen(true)}
        className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition'
      >
        Open Menu
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={menuData}
      />
    </main>
  );
}

export default App;
