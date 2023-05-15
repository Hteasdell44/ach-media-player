import React from 'react';
import { Embed as SemanticUIEmbed } from 'semantic-ui-react';

const EmbedComponent = ({ id, placeholder, source }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SemanticUIEmbed
        style={{ width: '300px', height: '300px', paddingTop: 0, paddingBottom: 0 }}
        id={id}
        placeholder={placeholder}
        source={source}
      />
    </div>
  );
};

export default EmbedComponent;
