import React from 'react';

declare global {
  interface Window {
    showCollectorDialog: () => void;
    fetch: (url: string, options?: {}) => Promise<any>;
    ATL_JQ_PAGE_PROPS:
    | {
      fieldValues?: () => { [customFieldCode: string]: string | undefined };
      triggerFunction: (showCollectorDialog: any) => void;
    }
    | undefined;
  }
}

function App() {
  return (
    <div className="App">
      <div>jira react app</div>
      <button onClick={() => window.showCollectorDialog()}>show issue collector</button>
    </div>
  );
}

export default App;
