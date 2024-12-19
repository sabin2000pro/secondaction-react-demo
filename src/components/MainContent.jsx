import { useState } from 'react';
import HelpArea from './HelpArea';

const MainContent = () => {
  const [helpVisible, setHelpVisible] = useState(false);

  const toggleHelp = () => {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <>
     
       <div>

        <main>
           
          <button 
            onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</button>

          {helpVisible && <HelpArea />}

    </main>
    
       </div>

    </>

  );
}

export default MainContent;