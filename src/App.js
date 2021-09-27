import { useState } from 'react';
import './App.css';
import SearchWord from './components/SearchWord';
import WordDetails from './components/WordDetails.js';

const API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function App() {
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchBefore, setFetchBefore] = useState(false);

  const searchWord = async (query) => {
    try {
      setLoading(true);
      setFetchBefore(true);

      const response = await fetch(`${API_BASE_URL}${query}`);
      if (response.status === 200) {
        const result = await response.json();
        setWord(result[0]);
      } else {
        setWord({});
      }
    } catch (_) {}
    setLoading(false);
  };

  return (
    <div>
      <SearchWord searchWord={searchWord} />
      <div className='word_details'>
        {fetchBefore ? (
          loading ? (
            'Please wait...'
          ) : (
            <WordDetails word={word} />
          )
        ) : (
          'Please search a word'
        )}
      </div>
    </div>
  );
}

export default App;
