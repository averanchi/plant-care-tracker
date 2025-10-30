import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function KpiCard({ title, value }: { title: string; value: number }) {
    return (
        <Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-semibold">{value}</p></CardContent></Card>
    );
}
