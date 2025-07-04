// --- React ---
import React from 'react';
import { Placeholder } from 'react-bootstrap';

const CodClassName = ({ isGenerating, value }) => {
  return (
    <>
      <h3 className='text-center'>
        &ldquo;
        {isGenerating ? (
          <Placeholder as='span' animation='glow'>
            <Placeholder xs={2} />
          </Placeholder>
        ) : (
          value
        )}
        &rdquo;
      </h3>
      <hr />
    </>
  );
};

export default CodClassName;
