import type { ReactNode, FC } from "react";

/* ========= TYPES ========= */
interface TableProps {
    children: ReactNode;
}

/* ========= TABLE ========= */
const Table: FC<TableProps> = ({ children }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
                {children}
            </table>
        </div>
    );
};

/* ========= HEADER ========= */
const TableHeader: FC<TableProps> = ({ children }) => {
    return (
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            {children}
        </thead>
    );
};

/* ========= BODY ========= */
const TableBody: FC<TableProps> = ({ children }) => {
    return <tbody>{children}</tbody>;
};

/* ========= ROW ========= */
const TableRow: FC<TableProps> = ({ children }) => {
    return (
        <tr className="border-b hover:bg-gray-50 transition">
            {children}
        </tr>
    );
};

/* ========= HEADER CELL (th) ========= */
const TableHeadCell: FC<TableProps> = ({ children }) => {
    return (
        <th className="px-4 py-3 font-semibold border">
            {children}
        </th>
    );
};

/* ========= CELL (td) ========= */
const TableCell: FC<TableProps> = ({ children }) => {
    return (
        <td className="px-4 py-2 border">
            {children}
        </td>
    );
};

/* ========= EXPORT ========= */
export {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHeadCell,
    TableCell,
};