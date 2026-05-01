import { useState, useEffect } from 'react';

export function useDownloadTracker() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('cv_download_count');
    if (saved) setCount(parseInt(saved));
  }, []);

  const trackDownload = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('cv_download_count', String(newCount));
  };

  return { count, trackDownload };
}