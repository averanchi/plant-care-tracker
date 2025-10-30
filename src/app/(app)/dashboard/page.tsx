import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskRow } from "@/components/ui/task-row";
import { KpiCard } from "@/components/ui/kpi-card";

import { Task } from "@/lib/types/types";

// (в реале дергаем из БД через server actions/ORM)
const mock: { overdue: Task[]; today: Task[] } = {
    overdue: [
        { id: "t1", plantName: "Monstera", type: "WATER", dueAt: "2025-10-27" },
    ],
    today: [
        { id: "t2", plantName: "Ficus", type: "MIST", dueAt: "2025-10-30" },
        { id: "t3", plantName: "Aloe", type: "WATER", dueAt: "2025-10-30" },
    ],
};

export default async function DashboardPage() {
    const overdue = mock.overdue;
    const today = mock.today;

    return (
        <div className="grid gap-4">
            {/* KPI */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <KpiCard title={"Overdue"} value={overdue.length} />
                <KpiCard title={"Today"} value={today.length} />
                <KpiCard title={"Done this week"} value={0} />
            </div>

            {/* Overdue */}
            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        Overdue <Badge variant="destructive">{overdue.length}</Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {overdue.length === 0 ? (
                        <p className="text-sm text-muted-foreground">Нет просроченных задач — супер!</p>
                    ) : (
                        overdue.map((t) => <TaskRow key={t.id} task={t} />)
                    )}
                </CardContent>
            </Card>

            {/* Today */}
            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        Today <Badge>{today.length}</Badge>
                    </CardTitle>
                    {/* Тут можно добавить фильтры по типу задачи */}
                </CardHeader>
                <CardContent className="space-y-2">
                    {today.length === 0 ? (
                        <p className="text-sm text-muted-foreground">На сегодня всё сделано ✨</p>
                    ) : (
                        today.map((t) => <TaskRow key={t.id} task={t} />)
                    )}
                </CardContent>
            </Card>
        </div>
    );
}