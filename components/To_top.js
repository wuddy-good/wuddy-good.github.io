import React from "react";
import Link from 'next/link';

const To_top = () =>{
    return(
        <Link href='#header' class="top">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.583 9.00065L8.99968 1.41732M8.99968 1.41732L1.41634 9.00065M8.99968 1.41732L8.99968 16.584"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
        </Link>
        
    )
}
export default To_top;