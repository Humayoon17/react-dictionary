import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton } from '@mui/material';

import React from 'react';

const Pronouncetion = ({ pronouns }) => {
  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };
  return (
    <>
      <div className='center_left margin'>
        <h3>Pronouncetion</h3>
      </div>

      <div>
        {pronouns.map((noun, index) => {
          return (
            <span key={index}>
              <div className='center_left'>
                <h5>Pronouns: </h5>
                {noun.text}
              </div>
              <div className='center_left'>
                <h5>Audio: </h5>
                <IconButton
                  aria-label='Play'
                  color='primary'
                  size='small'
                  onClick={() => playAudio(noun.audio)}
                >
                  <VolumeUpIcon fontSize='inherit' />
                </IconButton>
              </div>
            </span>
          );
        })}
      </div>
    </>
  );
};

const Meanings = ({ meanings }) => {
  return (
    <>
      <div className='center_left margin'>
        <h3>Meanings</h3>
      </div>
      <div>
        {meanings.map((meaning, index) => {
          return (
            <span key={index}>
              <div className='center_left margin'>
                <h4>Part of speech: </h4>
                {meaning.partOfSpeech}
              </div>
              {meaning.definitions.map((definition, index) => {
                return (
                  <div key={index}>
                    <h5>Definition: </h5>
                    <div>{definition.definition}</div>
                    <h5>Example: </h5>
                    <div>{definition.example}</div>
                  </div>
                );
              })}
            </span>
          );
        })}
      </div>
    </>
  );
};

const WordDetails = ({ word }) => {
  if (Object.keys(word).length < 1) {
    return (
      <div className='center_element'>Not found please search another word</div>
    );
  }

  return (
    <div className='word_container'>
      <div className='center_left'>
        <h5>Word: </h5> {word.word}
      </div>
      <Pronouncetion pronouns={word.phonetics} />
      <Meanings meanings={word.meanings} />
    </div>
  );
};

export default WordDetails;
