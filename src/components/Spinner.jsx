// components/Spinner.jsx
const Spinner = ({ size = 12, color = "border-yellow" }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#121212] text-gray-200">
    <div
      className={`animate-spin rounded-full h-${size} w-${size} border-4 ${color} border-t-transparent`}
    />
  </div>
);

export default Spinner;
