import React from 'react'
import Link from 'next/link'

const Edit = () => {
    return (
        <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
            <div className="addTodo my-5">

                <h2 className='text-lg font-bold'>Edit Task</h2>

                <input type='text' className='w-1/2 bg-amber-50' />

                <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>
                    <Link href={"/home"}>Add</Link>
                
                </button>
            </div>
        </div>

    )
}

export default Edit
