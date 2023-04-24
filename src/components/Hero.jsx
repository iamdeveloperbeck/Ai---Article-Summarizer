import React from 'react';
import { logo } from '../assets';

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className="w-full pt-5 mb-10 flex justify-between items-center">
                <img src={logo} alt="sumz logo" className='w-28 object-contain' />
                <div className='flex items-center gap-[20px]'>
                    <select name="lang" id="lang" className='w-[60px] border border-black outline-none cursor-pointer font-satoshi rounded-[4px]'>
                        <option value="en">ENG</option>
                        <option value="uz">UZB</option>
                    </select>
                    <button type='button' onClick={() => window.open('https://github.com/BeckSattorov')} className='black_btn'>Github</button>
                </div>
            </nav>
            <h1 className='head_text'>
                Summarize Article with <br className='max-md:hidden' />
                <span className='orange_gradient font-satoshi'>OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an open source article summarizer that transforms lengthy articles into clear and concise summaries.
            </h2>
        </header>
    );
};

export default Hero;