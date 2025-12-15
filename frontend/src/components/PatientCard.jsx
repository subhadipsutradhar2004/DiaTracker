import React from 'react'
import { Link } from 'react-router-dom'

export default function PatientCard({p}){
  const statusColor = p.status==='urgent'? 'bg-red-500' : p.status==='stable'? 'bg-green-500' : 'bg-yellow-500'
  return (
    <Link to={`/patient/${p.id}`} className="block p-2 sm:p-3 rounded-md hover:bg-white card">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="font-semibold text-xs sm:text-sm">{p.name}</div>
          <div className="text-xs text-neutral-700">{p.id} • {p.age} yrs</div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className={`inline-block px-2 py-0.5 text-xs text-white rounded ${statusColor}`}>{p.status.toUpperCase()}</div>
          <div className="text-xs text-neutral-700">K {p.currentK.toFixed(1)}</div>
        </div>
      </div>
    </Link>
  )
}
