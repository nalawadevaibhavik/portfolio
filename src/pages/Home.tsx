export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-8">
            <div className="max-w-3xl text-center">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Our Portfolio Management Dashboard
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    We provide transparent and data-driven insights into trading performance.
                    Analyze month-on-month returns, track equity curves, and measure drawdowns
                    with easy-to-understand visual charts.
                </p>

                <div className="gap-4">
                    <a
                        href="/blogs"
                        className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
                    >
                        View Blogs
                    </a>
                    <a
                        href="/portfolio"
                        className="inline-block bg-black text-white gap-4 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
                    >
                        View Portfolio Statistics
                    </a>
                </div>


            </div>
        </div>
    );
}
