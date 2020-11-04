import React from 'react';

export default function Loader() {
  return (
    <div style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}>
      <i className="fa fa-cog fa-spin fa-4x" />
    </div>
  );
}
