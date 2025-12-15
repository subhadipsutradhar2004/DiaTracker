import React, {useMemo} from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { PATIENTS } from '../data/sample'
import RecommendationCard from '../components/RecommendationCard'

export default function PatientDetail(){
  const {id} = useParams()
  const patient = PATIENTS.find(p=>p.id===id) || PATIENTS[0]

  // simple mock recommendation logic
  const rec = useMemo(()=>{
    const latestK = patient.labs[patient.labs.length-1].potassium
    if(latestK>=6) return {duration:'3.5h', nextInHours:36, confidence:0.85}
    if(latestK>=5.5) return {duration:'4h', nextInHours:48, confidence:0.6}
    return {duration:'4h', nextInHours:72, confidence:0.45}
  },[patient])

  function onAccept(){
    alert('Accepted recommendation (mock)')
  }
  function onOverride(){
    const reason = prompt('Override reason (required)')
    if(reason && reason.length>5){
      alert('Override submitted (mock)')
    } else alert('Please provide a reason > 5 chars')
  }

  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        <div className="lg:col-span-8 col-span-1">
          <div className="p-3 sm:p-4 card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="text-lg sm:text-2xl font-bold">{patient.name}</div>
                <div className="text-xs sm:text-sm text-neutral-700">Last session: {new Date(patient.lastSession).toLocaleString()}</div>
              </div>
              <div className="sm:text-right">
                <div className="text-red-600 font-semibold text-xs sm:text-sm">{patient.status.toUpperCase()}</div>
                <div className="text-xs sm:text-sm text-neutral-700">K {patient.currentK.toFixed(1)}</div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <h4 className="font-semibold text-sm sm:text-base">Potassium trend</h4>
              <div className="mt-3 p-3 sm:p-6 bg-gray-50 rounded text-xs sm:text-sm">(Chart placeholder — integrate recharts)</div>
            </div>

            <div className="mt-4 sm:mt-6">
              <h4 className="font-semibold text-sm sm:text-base">Session history</h4>
              <div className="mt-3 text-xs sm:text-sm text-neutral-700">{patient.labs.map(l=> (<div key={l.date}>{l.date} — K: {l.potassium}</div>))}</div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 col-span-1">
          <RecommendationCard rec={rec} onAccept={onAccept} onOverride={onOverride} />

          <div className="mt-4 p-3 sm:p-4 card">
            <h4 className="font-semibold text-sm sm:text-base">SHAP preview</h4>
            <div className="mt-2 text-xs sm:text-sm text-neutral-700">Top influences: Potassium ↑, UF ↑, Time since last ↓</div>
          </div>
        </aside>
      </main>
    </div>
  )
}
