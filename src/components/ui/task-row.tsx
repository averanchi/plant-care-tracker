"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, StickyNote } from "lucide-react";

type Task = {
    id: string;
    plantName: string;
    type: "WATER" | "MIST" | "FERTILIZE" | string;
    dueAt: string;
};

export function TaskRow({ task }: { task: Task }) {
    const label =
        task.type === "WATER" ? "Полив" :
            task.type === "MIST" ? "Опрыскать" :
                task.type === "FERTILIZE" ? "Удобрение" : task.type;

    const onDone = async () => {
        // TODO: server action completeTask(task.id)
        console.log("done", task.id);
    };
    const onSnooze = async (days: number) => {
        // TODO: server action snoozeTask(task.id, days)
        console.log("snooze", task.id, days);
    };
    const onNote = async () => {
        // TODO: диалог заметки
        console.log("note", task.id);
    };

    return (
        <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-3">
                <Badge variant="secondary">{label}</Badge>
                <div>
                    <div className="font-medium">{task.plantName}</div>
                    <div className="text-xs text-muted-foreground">Срок: {task.dueAt}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => onSnooze(1)}>
                    <Clock className="h-4 w-4 mr-1" /> +1д
                </Button>
                <Button size="sm" variant="outline" onClick={() => onSnooze(1)}>
                    <Clock className="h-4 w-4 mr-1" /> +2д
                </Button>
                <Button size="sm" variant="outline" onClick={() => onSnooze(3)}>
                    <Clock className="h-4 w-4 mr-1" /> +3д
                </Button>
                <Button size="sm" variant="outline" onClick={onNote}>
                    <StickyNote className="h-4 w-4 mr-1" /> Note
                </Button>
                <Button size="sm" onClick={onDone}>
                    <Check className="h-4 w-4 mr-1" /> Done
                </Button>
            </div>
        </div>
    );
}
