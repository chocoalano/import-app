function MyButton() {
    return (
    <button className="w-24 bg-blue-900 text-lg rounded-md text-white py-2 hover:bg-blue-700">
        Click Me
    </button>);
}
export default function MyApp() { 
    return (
<div className="w-96 h-96 flex flex-col items-center justify-center bg-gray-200 border-2 m-6">
    <h1 className="py-5">Welcome to My App</h1>
    <MyButton />
</div>
);
}