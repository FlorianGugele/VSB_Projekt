export default function Angemeldet({ onLogout }) {
    return (
        <div className="bg-red-400 h-[77vh] flex flex-col items-center justify-center gap-4">
            <div>
                <p className="text-2xl">Angemeldet</p>
            </div>
            <div className="bg-green-400 m-5 p-4 rounded-lg">
                <p>Florian Gugele</p>
            </div>
            <button
                onClick={onLogout}
                className="bg-white text-black px-4 py-2 rounded-lg transition hover:bg-gray-200"
            >
                Zurück
            </button>
        </div>
    );
}