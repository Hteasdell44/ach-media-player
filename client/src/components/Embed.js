import React from 'react';
import { Embed as SemanticUIEmbed } from 'semantic-ui-react';

const EmbedComponent = ({ id, placeholder, source }) => {
  return (
    <div style={{ float: 'left', marginLeft: "700px", width: "650px" }}>
      <SemanticUIEmbed
        style={{ width: "500px", height: "300px", paddingTop: 0, paddingBottom: 0 }}
        id={id}
        placeholder={placeholder}
        source={source}
      />
    </div>
  );
};

export default EmbedComponent;
