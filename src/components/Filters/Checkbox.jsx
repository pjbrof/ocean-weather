const Checkbox = ({ label, description }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          onChange={(e) => console.log(e.target.checked)}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="comments" className="font-medium text-gray-700">
          {label}
        </label>
        <span id="comments-description" className="text-gray-500">
          {' '}{description}
        </span>
      </div>
    </div>
  );
}

export default Checkbox;