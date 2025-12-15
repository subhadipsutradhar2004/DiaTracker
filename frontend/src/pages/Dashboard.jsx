import React ,{ useState } from 'react'
import Header from '../components/Header'
import { PATIENTS } from '../data/sample'
import PatientCard from '../components/PatientCard'

export default function Dashboard(){
  const [form, setForm] = useState({
    patientId: '',
    patientName: '',
    age: '',
    gender: '',
    // urine reports
    albuminCreatinineRatio: '',
    proteinuria: '',
    urineOutput: '',
    // vitals
    bloodPressure: '',
    pulse: '',
    weight: '',
    // lab results (add as many as you like)
    serumCreatinine: '',
    egfr: '',
    bun: '',
    serumSodium: '',
    serumPotassium: '',
    serumChloride: '',
    serumCalcium: '',
    serumPhosphate: '',
    serumBicarbonate: '',
    hemoglobin: '',
    albumin: '',
    pth: '',
    // symptoms
    symptoms: '',
  });

  const [activityText, setActivityText] = useState(
    'Fill in the urgent patient form and click "Analyze patient" to see recommendations.'
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setActivityText('Analyzing patient with Gemini…');

    try {
      const res = await fetch('http://localhost:3000/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.text) {
        setActivityText(data.text);
      } else {
        setActivityText('No response from Gemini. Check the backend logs.');
      }
    } catch (err) {
      setActivityText('Error calling backend: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Header activePage="dashboard" />
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <aside className="md:col-span-3 col-span-1">
          <div className="p-3 sm:p-4 card">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm sm:text-base">Patients</h4>
            </div>
            <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {PATIENTS.map(p=> <PatientCard key={p.id} p={p} />)}
            </div>
          </div>
        </aside>

        <section className="md:col-span-7 col-span-1 space-y-4 md:space-y-6">
  {/* Urgent patient form */}
  <div className="p-3 sm:p-4 card">
    <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Urgent patient – DiaTracker form</h3>

    {/* scrollable area, like your mobile screenshots */}
    <form
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6 max-h-[480px] overflow-y-auto pr-1 sm:pr-2"
    >
      {/* Basic patient details */}
      <div className="bg-gradient-to-br from-[#a459ba] to-[#4e9ae7] rounded-2xl sm:rounded-3xl p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Basic Patient details</h4>
        <div className="space-y-2 sm:space-y-3">
          <input
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            placeholder="PatientID"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
          <input
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            placeholder="Patient name"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
          <input
            name="gender"
            value={form.gender}
            onChange={handleChange}
            placeholder="Gender (Male/Female)"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
      </div>

      {/* Urine reports */}
      <div className="bg-gradient-to-br from-[#a459ba] to-[#4e9ae7] rounded-2xl sm:rounded-3xl p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Urine reports</h4>
        <div className="space-y-2 sm:space-y-3">
          <input
            name="albuminCreatinineRatio"
            value={form.albuminCreatinineRatio}
            onChange={handleChange}
            placeholder="Albumin_Creatinine_Ratio_mg/g"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
          <input
            name="proteinuria"
            value={form.proteinuria}
            onChange={handleChange}
            placeholder="Proteinuria"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
          <input
            name="urineOutput"
            value={form.urineOutput}
            onChange={handleChange}
            placeholder="Urine_Output_mL/day"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
      </div>

      {/* Vital signs */}
      <div className="bg-gradient-to-br from-[#a459ba] to-[#4e9ae7] rounded-2xl sm:rounded-3xl p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Vital signs</h4>
        <div className="space-y-2 sm:space-y-3">
          <input
            name="bloodPressure"
            value={form.bloodPressure}
            onChange={handleChange}
            placeholder="BloodPressure_mmHg"
            className="w-full rounded-xl sm:rounded-2xl border border-blue-400 focus:ring-2 focus:ring-rose-400 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none"
          />
          <input
            name="pulse"
            value={form.pulse}
            onChange={handleChange}
            placeholder="Pulse_bpm"
            className="w-full rounded-xl sm:rounded-2xl border border-blue-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
          <input
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="Weight_kg"
            className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
      </div>

      {/* Lab results */}
      <div className="bg-gradient-to-br from-[#a459ba] to-[#4e9ae7] rounded-2xl sm:rounded-3xl p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Lab results</h4>
        <div className="space-y-2 sm:space-y-3">
          <input name="serumCreatinine" value={form.serumCreatinine} onChange={handleChange} placeholder="Serum_Creatinine_mg/dL" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="egfr" value={form.egfr} onChange={handleChange} placeholder="eGFR_mL/min/1.73m2" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="bun" value={form.bun} onChange={handleChange} placeholder="BUN_mg/dL" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="serumSodium" value={form.serumSodium} onChange={handleChange} placeholder="Serum_Sodium_mEq/L" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="serumPotassium" value={form.serumPotassium} onChange={handleChange} placeholder="Serum_Potassium_mEq/L" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="serumChloride" value={form.serumChloride} onChange={handleChange} placeholder="Serum_Chloride_mEq/L" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="serumCalcium" value={form.serumCalcium} onChange={handleChange} placeholder="Serum_Calcium_mg/dL" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="serumPhosphate" value={form.serumPhosphate} onChange={handleChange} placeholder="Serum_Phosphate_mg/dL" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="serumBicarbonate" value={form.serumBicarbonate} onChange={handleChange} placeholder="Serum_Bicarbonate_mEq/L" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="hemoglobin" value={form.hemoglobin} onChange={handleChange} placeholder="Hemoglobin_g/dL" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="albumin" value={form.albumin} onChange={handleChange} placeholder="Albumin_g/dL" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="pth" value={form.pth} onChange={handleChange} placeholder="PTH_pg/mL" className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400" />
        </div>
      </div>

      {/* Symptoms */}
      <div className="bg-gradient-to-br from-[#a459ba] to-[#4e9ae7] rounded-2xl sm:rounded-3xl p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Symptoms</h4>
        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          placeholder="Symptoms"
          rows={3}
          className="w-full rounded-xl sm:rounded-2xl border border-rose-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-rose-400"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#a459ba] to-[#4e9ae7] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white  hover:bg-[#eee5f2] hover:text-[#ffffff] hover:border-neutral-300 hover:border-[2px]"
        disabled={loading}
      >
        {loading ? 'Analyzing…' : 'Analyze patient'}
      </button>
    </form>
  </div>

  {/* Activity block stays here, we just bind it to state below */}
  <div className="p-3 sm:p-4 card">
    <h3 className="font-semibold text-sm sm:text-base">Activity</h3>
    <div className="mt-2 text-xs sm:text-sm text-neutral-700 whitespace-pre-wrap">
      {activityText}
    </div>
  </div>
</section>


        <aside className="md:col-span-2 col-span-1">
          <div className="p-3 sm:p-4 card">
            <h4 className="font-semibold text-sm sm:text-base">Quick stats</h4>
            <div className="mt-3 text-xs sm:text-sm text-neutral-700">Acceptance rate: 82%<br/>Avg confidence: 78%</div>
          </div>
        </aside>
      </main>
    </div>
  )
}
