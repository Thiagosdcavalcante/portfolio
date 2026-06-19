import React from 'react';

export function Footer({ footer }) {
  return (
    <footer id="contact" className="footer">
      <p>{footer.copy}</p>
    </footer>
  );
}