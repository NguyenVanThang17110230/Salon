import HeaderAdmin from 'containers/HeaderAdmin'
import SideBarAdmin from 'containers/SideBarAdmin'
import React from 'react'

const Admin = ({children}) => {
    return (
        <div className="row mx-0">
            <div className="col-2 px-0">
                <SideBarAdmin />
            </div>
            <div className="col-10 px-0">
                <HeaderAdmin />
                <main className="px-3 py-4">{children}</main>
            </div>
        
        </div>
    )
}

export default Admin
