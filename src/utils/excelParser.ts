import * as XLSX from "xlsx";


export interface NavDataPoint {
    date: string;
    nav: number;
}


export function parseExcel(file: File): Promise<NavDataPoint[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();


        reader.onload = (e) => {
            const data = new Uint8Array(e.target?.result as ArrayBuffer);
            const workbook = XLSX.read(data, { type: "array" });


            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows: any[] = XLSX.utils.sheet_to_json(sheet);


            const formatted: NavDataPoint[] = rows.map((row) => ({
                date: row.Date,
                nav: parseFloat(row.NAV),
            }));


            resolve(formatted);
        };


        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}