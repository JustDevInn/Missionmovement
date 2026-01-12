// components/Spinner.jsx
const Spinner = ({ size = "h-6 w-6", color = "border-mmAccent" }) => (
  <div
    className={`animate-spin rounded-full ${size} border-4 ${color} border-t-transparent`}
    aria-label="Loading"
  />
);

export default Spinner;
