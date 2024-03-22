export default function Button({ children }) {
  return (
    <button className="bg-secondary-color w-full py-3 rounded-md hover:bg-primary-color text-white font-bold text-xl duration-150">
      {children}
    </button>
  );
}
