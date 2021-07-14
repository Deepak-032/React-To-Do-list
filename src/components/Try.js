import React from 'react'
import $ from 'jquery'

function Try() {

    return (
        <div>
            <button className="but">ecfc</button>
            <button className="but">ecfc</button>
            <button className="but">ecfc</button>
            <button className="but">ecfc</button>
        </div>
    )
}

export default Try

$(function () {
    $('.but').on("click", function () {
        $(this).addClass('deepak')
    })
})