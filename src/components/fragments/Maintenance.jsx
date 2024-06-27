export function Maintenance() {
    const data = [
        { month: 'Jan', pending: 0, success: 0 },
        { month: 'Feb', pending: 0, success: 0 },
        { month: 'Mar', pending: 0, success: 0 },
        { month: 'Apr', pending: 0, success: 0 },
        { month: 'May', pending: 0, success: 0 },
        { month: 'Jun', pending: 60, success: 0 },
        { month: 'Jul', pending: 0, success: 66 },
        { month: 'Aug', pending: 0, success: 0 },
        { month: 'Sep', pending: 0, success: 0 },
        { month: 'Oct', pending: 0, success: 0 },
        { month: 'Nov', pending: 0, success: 0 },
        { month: 'Dec', pending: 0, success: 0 },
    ];

    const Bar = ({ height, color }) => (
        <div
            className={`w-8 ${color} rounded-t-md`}
            style={{ height: `${height}%` }}
        ></div>
    );
    return (
        <>
            <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>
                <div className="flex justify-between items-end h-64 border-l border-b border-gray-300 p-4">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex items-end space-x-1">
                                <Bar height={item.pending} color="bg-yellow-500" />
                                <Bar height={item.success} color="bg-teal-400" />
                            </div>
                            <span className="mt-2 text-sm">{item.month}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <div className="flex items-center mr-4">
                        <span className="w-3 h-3 bg-yellow-500 block rounded-full mr-2"></span>
                        <span>Pending</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 bg-teal-400 block rounded-full mr-2"></span>
                        <span>Success</span>
                    </div>
                </div>
            </div>
        </>
    )
}