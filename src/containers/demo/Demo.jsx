import React, { useState, useEffect } from 'react';

const fetchAPIHusband = () =>
  new Promise(resolve =>
    setTimeout(() => resolve({ name: 'Chung', nickname: 'mập' }), 2000),
  );

const fetchAPIWife = () =>
  new Promise(resolve => setTimeout(() => resolve({ name: 'Còn FA' }), 1000));

const useFetchHusband = ({ setHusband }) =>
  useEffect(() => {
    const fetchAPI = async () => {
      const { name } = await fetchAPIHusband();
      setHusband(name);
    };

    fetchAPI();
  }, []);

const useFetchWife = ({ setWife, husband }) =>
  useEffect(() => {
    if (!husband) return;

    const fetchAPI = async () => {
      const { name } = await fetchAPIWife();
      setWife(name);
    };

    fetchAPI();
  }, [husband]);

const Demo = () => {
  const [husband, setHusband] = useState('');
  const [wife, setWife] = useState('');

  useFetchHusband({ setHusband });
  useFetchWife({ husband, setWife });

  return (
    <div>
      <div>Husband: {husband}</div>
      <div>Wife: {wife}</div>
    </div>
  );
};

export default Demo;
