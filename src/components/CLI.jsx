'use client';

import { useState, useEffect } from 'react';

export default function CLI({ blocks }) {
  const [output, setOutput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blockIndex, setBlockIndex] = useState(0);

  useEffect(() => {
    if (blockIndex >= blocks.length) {
      return;
    }

    const lines = blocks[blockIndex].split('\n');

    if (currentIndex < lines.length) {
      const lineTimer = setTimeout(() => {
        setOutput((prevOutput) => prevOutput + lines[currentIndex] + '\n');
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); // Delay between lines
      return () => clearTimeout(lineTimer);
    } else {
      const blockTimer = setTimeout(() => {
        setBlockIndex((prevBlockIndex) => prevBlockIndex + 1);
        setCurrentIndex(0);
      }, 300); // Delay between blocks
      return () => clearTimeout(blockTimer);
    }
  }, [currentIndex, blockIndex, blocks]);

  return (
    <div className="cli-output">
      {output}
      <span className="blinking-cursor"></span>
    </div>
  );
}
