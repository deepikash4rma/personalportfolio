import React, { useState } from 'react';
import './Contact.css';

const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT;

function Contact() {
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState('');
  const [noteStatus, setNoteStatus] = useState('idle');
  const email = 'dpsharma@g.ucla.edu';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendNote = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT || !note.trim()) return;

    setNoteStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ message: note.trim(), _subject: 'Portfolio note' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setNoteStatus('success');
      setNote('');
    } catch {
      setNoteStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Email: <span className="email">{email}</span></p>
      <button className="copy-button" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy Email'}</button>

      <div className="social-links">
        <a href="https://www.github.com/deepikash4rma" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/deepikash4rma/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      <form className="note-form" onSubmit={handleSendNote}>
        <textarea
          placeholder="Leave a note for me!"
          rows="3"
          className="note-box"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
            if (noteStatus === 'success' || noteStatus === 'error') setNoteStatus('idle');
          }}
          disabled={noteStatus === 'submitting'}
          aria-label="Message"
        />
        {!FORMSPREE_ENDPOINT && (
          <p className="note-hint">
            To enable sending: sign up at{' '}
            <a href="https://formspree.io" target="_blank" rel="noreferrer">formspree.io</a>
            , create a form, then add{' '}
            <code className="note-code">REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id</code>{' '}
            to <code className="note-code">.env.local</code> in the project root (gitignored) and restart{' '}
            <code className="note-code">npm start</code>.
          </p>
        )}
        <button
          type="submit"
          className="copy-button note-send"
          disabled={!FORMSPREE_ENDPOINT || !note.trim() || noteStatus === 'submitting'}
        >
          {noteStatus === 'submitting' ? 'Sending…' : 'Send note'}
        </button>
        {noteStatus === 'success' && <p className="note-feedback note-success">Thanks — I got your note.</p>}
        {noteStatus === 'error' && (
          <p className="note-feedback note-error">Something went wrong. Try again or email me directly.</p>
        )}
      </form>
    </div>
  );
}

export default Contact;