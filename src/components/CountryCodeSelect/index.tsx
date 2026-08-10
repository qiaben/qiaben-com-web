import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { countries, flagUrl } from './countries';
import type { Country } from './countries';
import styles from './styles.module.css';

export default function CountryCodeSelect({
  value,
  onChange,
  children,
}: {
  value: Country;
  onChange: (country: Country) => void;
  children: ReactNode;
}): ReactNode {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) || c.dial.includes(query),
  );

  return (
    <div className={styles.root} ref={rootRef}>
      {!open && (
        <div className={styles.collapsedRow}>
          <button
            type="button"
            className={styles.trigger}
            onClick={() => setOpen(true)}
            aria-haspopup="listbox"
            aria-expanded={open}>
            <img src={flagUrl(value.code)} alt="" className={styles.flagImg} />
            <span className={styles.dial}>{value.dial}</span>
            <svg viewBox="0 0 320 512" width="9" height="9" fill="currentColor" aria-hidden="true">
              <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
            </svg>
          </button>
          {children}
        </div>
      )}

      {open && (
        <div className={styles.searchPanel}>
          <div className={styles.searchRow}>
            <input
              type="text"
              placeholder="Search countries"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
          </div>
          <ul className={styles.list} role="listbox">
            {filtered.length === 0 && <li className={styles.empty}>No countries found</li>}
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  className={styles.option}
                  onClick={() => {
                    onChange(c);
                    setOpen(false);
                    setQuery('');
                  }}>
                  <img src={flagUrl(c.code)} alt="" className={styles.flagImg} />
                  {c.name} <span className={styles.optionDial}>{c.dial}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
