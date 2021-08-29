import React from 'react';
import style from './ContactList.module.css';

function Filter({ example, handleDelete }) {
  return (
    <div className={style.contacts}>
      <span>Find contacts by name</span>
      {example.length > 0 && (
        <ul>
          {example.map(item => (
            <li key={item.id}>
              {item.name} : {item.number}
              <button
                className={style.button}
                type="submit"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
