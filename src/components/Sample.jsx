import React from 'react';

import SampleCSS from './sample.module.css'

const Sample = () => {
    return (
        <div>
            <h2 className={SampleCSS.headerText}>This is blog title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque ipsa similique quos veniam officiis laborum sint doloremque facere. Quod omnis in amet explicabo voluptas tenetur beatae, culpa dicta asperiores!</p>
            <button className={SampleCSS.btn}>Read More</button>
        </div>
    );
};

export default Sample;