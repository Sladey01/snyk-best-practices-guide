import React, { useState } from 'react';
import Header from './components/Header';
import SelectionForm from './components/SelectionForm';
import BestPracticesDisplay from './components/BestPracticesDisplay';
import snykBestPractices from './data/snykBestPractices';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('');
  const [showResults, setShowResults] = useState(false);

  const availableLanguages = Object.keys(snykBestPractices.languages).map(key => ({
    id: key,
    name: snykBestPractices.languages[key].name
  }));

  const availableFrameworks = selectedLanguage ? 
    Object.keys(snykBestPractices.languages[selectedLanguage].frameworks || {}).map(key => ({
      id: key,
      name: snykBestPractices.languages[selectedLanguage].frameworks[key].name
    })) : [];

  const handleLanguageChange = (languageId) => {
    setSelectedLanguage(languageId);
    setSelectedFramework('');
    setShowResults(false);
  };

  const handleFrameworkChange = (frameworkId) => {
    setSelectedFramework(frameworkId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLanguage) {
      setShowResults(true);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <SelectionForm 
          languages={availableLanguages}
          frameworks={availableFrameworks}
          selectedLanguage={selectedLanguage}
          selectedFramework={selectedFramework}
          onLanguageChange={handleLanguageChange}
          onFrameworkChange={handleFrameworkChange}
          onSubmit={handleSubmit}
        />
        
        {showResults && (
          <BestPracticesDisplay 
            languageData={snykBestPractices.languages[selectedLanguage]}
            frameworkData={selectedFramework ? snykBestPractices.languages[selectedLanguage].frameworks[selectedFramework] : null}
          />
        )}
      </div>
    </div>
  );
}

export default App;
