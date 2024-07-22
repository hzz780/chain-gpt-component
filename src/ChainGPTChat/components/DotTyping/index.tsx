import './styles.css';
import React from 'react';

export function DotTyping({
  loading = true
                          }: {
  loading?: boolean
}) {
  return <div className={`chain-gpt-dot-typing-stage ${loading ? 'flex' : 'hidden'}`}>
    <div className="chain-gpt-dot-typing" ></div>
  </div>
}
