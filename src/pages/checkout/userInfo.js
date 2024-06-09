import React, { useEffect, useState } from 'react';

const UserInfo = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    if (nameParam) {
      setName(nameParam);
    }
  }, []);

  return (
    <div style={{ fontSize: "100px", marginTop: "90px" }} className="myText">
      <figure className='text-center' id="label-container">
        <figcaption className='blockquote-footer' id="label_label3">
          <h1 id="label">Hello {name} your payment has been successful</h1>
          <h3 id="label2"></h3>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserInfo;
