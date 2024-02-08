export default function ShoppingListNameInput() {
  return (
    <div className="mt-auto bg-white px-10 py-8">
      <div className="border-2 border-primary rounded-xl flex">
        <input
          type="text"
          className="focus:outline-none bg-transparent px-4 py-5 text-sm flex-1"
          placeholder="Enter a name"
        />
        <button className="text-white bg-primary rounded-lg px-6">Save</button>
      </div>
    </div>
  );
}
