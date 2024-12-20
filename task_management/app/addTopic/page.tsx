export default function AddTopic() {
    return (
    <>
        <form className="flex flex-col items-column mx-3 my-3 space-y-3">
            <input className="bg-gray-800 p-2 rounded-md" type="text" placeholder="Topic Title" />
            <input className="bg-gray-800 p-2 rounded-md" type="text" placeholder="Topic Description" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md " type="submit">Add Topic</button>
        </form>
    </>
    );
}