import React from 'react'

export const FooterTableList = ({ i }) => {

    const tableTitles = ['Products', 'Pricing', 'Solutions', 'Demo', 'Services']
    const tableLinea1 = ['Enterprice', 'Premier Pro', 'Careers', 'Support', 'Pricing']
    const tableLinea2 = ['Developers', 'After Effects', 'Blog', 'Contact Us', 'Customers']
    const tableLinea3 = ['iPhone App', 'Final Cut Pro', 'Swag Store', 'Status Page', 'Sla']

    return (
        <ul>
            <li className="thead">{tableTitles[i]}</li>
            <li className="tbody">{tableLinea1[i]}</li>
            <li className="tbody">{tableLinea2[i]}</li>
            <li className="tbody">{tableLinea3[i]}</li>
        </ul>
    )
}
