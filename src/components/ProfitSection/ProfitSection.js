import React from 'react'
import ProfitSectionSingle from '../ProfitSectionSingle/ProfitSectionSingle'

function ProfitSection( { profitData } ) {
  return (
    <div className="container">
        <div className="profits">
            <h1 className="profit__heading">Perks of Joining Gen Alpha</h1>
            <div className="profits__section-heading"></div>

            <div className="profit-points">
                
                {profitData.map((profitSingle) => {
                    return (
                        <ProfitSectionSingle key={profitSingle.id} {...profitSingle} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProfitSection