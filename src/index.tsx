import { formData } from './forms';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Presentkort from './Presentkort';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

root.render(
    <>
      <h1>Hejghkvlhbkhb pa</h1>
      <Presentkort />
    </>,
  );

/*const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
});*/


