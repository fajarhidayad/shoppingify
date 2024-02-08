import { XIcon } from 'lucide-react';
import { useState } from 'react';
import FormControl from './FormControl';

const CreateItemForm = (props: { setFormInactive: () => void }) => {
  const [category, setCategory] = useState('');
  return (
    <aside className="w-[389px] py-8 px-10 flex flex-col">
      <h2 className="text-2xl mb-8">Add a new item</h2>

      <FormControl>
        <FormControl.Label htmlFor="name">Name</FormControl.Label>
        <FormControl.Input id="name" placeholder="Enter a name" />
      </FormControl>
      <FormControl>
        <FormControl.Label htmlFor="note">Note (optional)</FormControl.Label>
        <FormControl.Input id="note" placeholder="Enter a note" />
      </FormControl>
      <FormControl>
        <FormControl.Label htmlFor="image">Image (optional)</FormControl.Label>
        <FormControl.Input id="image" placeholder="Enter a image url" />
      </FormControl>

      <FormControl>
        <FormControl.Label htmlFor="category">Category</FormControl.Label>
        <div className="flex justify-between gap-x-1 border-2 border-gray-300 px-4 py-5 rounded-xl text-sm focus-within:border-primary">
          <input
            type="text"
            id="category"
            placeholder="Enter a category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent flex-1 focus:outline-none"
          />
          <button className="text-gray-500" onClick={() => setCategory('')}>
            <XIcon />
          </button>
        </div>
      </FormControl>

      <div className="mt-auto flex justify-center items-center gap-x-5">
        <button
          className="font-bold px-6 py-5 rounded-xl hover:bg-gray-200 transition-colors duration-200"
          onClick={props.setFormInactive}
        >
          cancel
        </button>
        <button className="bg-primary rounded-xl text-white px-6 py-5 font-bold">
          Save
        </button>
      </div>
    </aside>
  );
};

export default CreateItemForm;
