module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        accent1: '#6366f1',
        accent2: '#06b6d4',
        danger: '#ef4444',
        success: '#10b981',
        neutral900: '#111827',
        neutral700: '#374151',
        neutral100: '#f3f4f6'
      },
      borderRadius: {
        md: '12px'
      }
    }
  },
  plugins: []
}
