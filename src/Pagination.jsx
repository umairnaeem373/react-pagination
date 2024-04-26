import React from 'react'
import { FcNext , FcPrevious } from "react-icons/fc";

function Pagination({ totalPages, setCurrentPage , CurrentPage }) {
    const pages = []
    for (let i = 1; i <= Math.ceil(totalPages); i++) {

        pages.push(i)

    }
    return (
        <div className='my-5'>
            <button  
            className='btn me-2'
            disabled = {CurrentPage===1}
            onClick={()=>CurrentPage>1?setCurrentPage(CurrentPage-1):CurrentPage}
            ><FcPrevious/></button>
            {
                pages.map((page, i) => {
                    return (
                        <button key={i} onClick={() => setCurrentPage(page)} className=
                        {CurrentPage===page? 'bg-blue-400 mx-2 font-bold rounded p-2 px-3 duration-500' : 'text-white bg-black p-2 px-3' }>{page}</button>
                        )
                    })
                }
            <button 
            className='btn ms-2'
            disabled = {CurrentPage===totalPages}
            onClick={()=>CurrentPage<totalPages?setCurrentPage(CurrentPage+1):CurrentPage} ><FcNext/></button>
        </div>
    )
}

export default Pagination