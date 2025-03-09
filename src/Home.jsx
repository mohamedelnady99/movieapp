import React from 'react'
import Nav from './Nav'
export default function Home({ move }) {
    console.log(move);

    return <>
        <div className="container">
            <Nav />
            <div className="row px-5 text-white ">
                <h2>Explore</h2>
                <p>What are you gonna watch today ?</p>
            </div>

        <div className="row ">
            <div className="col-lg-12  px-5  position-relative ">
                <img src={`https://image.tmdb.org/t/p/w500${move[0]?.backdrop_path}`} className='w-100' />

                <div className="desc position-absolute text-white bottom-0 w-50 ">
                    <h3>{move[0]?.title}</h3>
                    <p>{move[0]?.overview}</p>
                </div>
            </div>
        </div>
            <div className="row  px-5 pt-4 g-4">
            <h2 className='text-white' >New Realease</h2>
                    {move.map((item) => (<div className='col-md-3' >
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='w-100' />
                        <h2 className='text-white'>{item.title||item.name}</h2>
                    </div>

                    ))}
                </div>
        </div>
    </>
}
