import React from 'react';

  const today = new Date();
  const year = today.getFullYear();
 
 export function Footer(){
     return (
    <footer className='flex justify-center items-center  text-black bg-gray-50 dark:bg-black dark:text-white h-16 mt-20'>
      <p>
        <small className=''> © {year} </small>
      </p>
    </footer>
  );
};
 
