import User from 'layouts/User'
import React from 'react'

const DetailStaff = () => {
    return (
        <User>
            <div className="my-5">
                <h3 className="text-center fw-bolder fs-1 mb-5">Bin Lee</h3>
                <img className="w-100" src={require("assets/img/staff-banner.png").default} alt="" />
            </div>
        </User>
    )
}

export default DetailStaff
