import React from 'react'

export default function RecommendationCard({rec,onAccept,onOverride}){
  return (
    <div className="p-3 sm:p-4 card">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <div className="text-xs sm:text-sm text-neutral-700">Recommendation</div>
          <div className="text-xl sm:text-2xl font-bold">{rec.duration}</div>
          <div className="text-xs sm:text-sm text-neutral-700">Next session: in {rec.nextInHours} hours</div>
        </div>
        <div className="sm:text-right">
          <div className="text-xs sm:text-sm text-neutral-700">Confidence</div>
          <div className="w-full sm:w-32 h-2 bg-gray-200 rounded mt-2">
            <div style={{width: `${Math.round(rec.confidence*100)}%`}} className="h-2 bg-primary rounded"></div>
          </div>
          <div className="text-xs sm:text-sm text-neutral-700 mt-2">{Math.round(rec.confidence*100)}%</div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button onClick={onAccept} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-white rounded-md text-xs sm:text-sm font-semibold">Accept</button>
        <button onClick={onOverride} className="px-3 sm:px-4 py-1.5 sm:py-2 border border-primary text-primary rounded-md text-xs sm:text-sm font-semibold">Override</button>
      </div>
    </div>
  )
}
