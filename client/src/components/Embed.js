import React from 'react';
import { Embed as SemanticUIEmbed } from 'semantic-ui-react';

const EmbedComponent = ({ id, placeholder, source }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
     <div style={{ maxWidth: '500px' }}></div>  
      <SemanticUIEmbed
        style={{width: "500px", height: "300px", paddingTop: 0, paddingBottom: 0 }}
        id={id}
        placeholder={placeholder}
        source={source}
      />
    </div>
  );
};

export default EmbedComponent;
