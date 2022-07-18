import React, { HTMLProps } from 'react';

import { Container } from '@layouts/';

export const Footer: React.FC<HTMLProps<HTMLDivElement>> = ({ ...attrs }) => (
  <footer className="Footer" {...attrs}>
    <Container>
      <div className=" py-2 mt-6">
        <p className="text-center text-xs" style={{ opacity: 0.6 }}>
          Сделано на курсе
          <a
            target="_blank"
            rel="noreferrer"
            href="https://tocode.ru/courses/react-s-nulya-do-rezultata/"
            className="ui-link ml-1"
          >
            React.js - с нуля до результата
          </a>
        </p>
      </div>
    </Container>
  </footer>
);
