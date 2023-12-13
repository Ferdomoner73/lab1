import React from 'react';
import { List, Link } from './lawinfo.styled';

const LawInfo = ({ regulations }) => {
  console.log(regulations);
  return (
    <div>
      <h1>Державні нормативно-правові акти</h1>
      <List>
        {regulations.map((regulation, index) => (
          <li key={index}>
            <Link
              href={regulation.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {regulation.title}
            </Link>
          </li>
        ))}
      </List>
    </div>
  );
};

export default LawInfo;
