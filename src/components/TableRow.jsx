function TableRow({datetime, type, fromto, desc, amount, isPlus}) {
    return (
        <tr className="hover:bg-slate-50 border-b border-slate-200">
            <td className="p-4 py-5">
            <p className="block font-semibold text-sm text-slate-800">{datetime}</p>
            </td>
            <td className="p-4 py-5">
            <p className="text-sm text-slate-500">{type}</p>
            </td>
            <td className="p-4 py-5">
            <p className="text-sm text-slate-500">{fromto}</p>
            </td>
            <td className="p-4 py-5">
            <p className="text-sm text-slate-500">{desc}</p>
            </td>
            <td className="p-4 py-5">
            <p className={isPlus ? "text-sm text-teal-400 font-bold" : "text-sm text-slate-500"}>{isPlus ? '+ '+amount : '- '+amount}</p>
            </td>
        </tr>
    )
}

export default TableRow;