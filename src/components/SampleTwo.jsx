import React from 'react';

import SampleTwoCss from './sampleTwo.module.css'

const SampleTwo = () => {
    return (
        <div>
            <h2>This is blog title two</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque ipsa similique quos veniam officiis laborum sint doloremque facere. Quod omnis in amet explicabo voluptas tenetur beatae, culpa dicta asperiores!</p>
            <button id={SampleTwoCss.btn}>Read More</button>
        </div>
    );
};

export default SampleTwo;