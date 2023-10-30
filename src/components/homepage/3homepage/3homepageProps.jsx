import React from 'react';

export default function ThirdHomepageProps() {
  return (
    <div>
        <div>
            <div>
                <img src={props.image} alt="" />
            </div>
            <p>{props.title}</p>
            <p>{props.about}</p>
        </div>
    </div>
  );
}
