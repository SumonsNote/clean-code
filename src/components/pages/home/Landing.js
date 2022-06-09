import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl 1.png';

const Landing = () => {
    return (
        <div>
            <div class="hero h-screen bg-accent mt-16">
                <div class="hero-content lg:h-[60vh] flex-col lg:flex-row">
                    <div>
                        <p>Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bucketGirl} class="max-w-sm rounded-lg" alt='' />
                    </div>
                </div>
            </div>
            <div className='rounded-2xl w-5/6 mx-auto bg-base-100 mt-[-50px] shadow-lg p-10'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </div>
    );
};

export default Landing;